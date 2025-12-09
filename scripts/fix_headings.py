#!/usr/bin/env python3
"""
fix_headings.py

Scan a Markdown file and convert full-line bold patterns into proper Markdown headings.

Usage:
  python scripts/fix_headings.py --file docusaurus/docs/original.md --in-place

Behavior:
- Creates a backup of the input file with a `.bak` suffix before modifying.
- Replaces lines like:
    **Concept:** Some text
    - **Frequent questions:**
    **Step 1: Greet & Set Context (2–3 seconds)**
  with appropriate Markdown headings, for example:
    ### Concept

    Some text
    #### Step 1: Greet & Set Context (2–3 seconds)

The script is conservative: it only transforms lines where the entire line (apart from an optional leading `- ` and whitespace)
is a bold expression (``**...**``) optionally followed by inline text. It preserves other content and indentation.

This tool is intended to be run by content authors to normalize heading markup for Docusaurus.
"""

import argparse
import re
from pathlib import Path
import shutil
import datetime

BOLD_LINE_RE = re.compile(r'^(?P<indent>\s*)(?:-\s*)?\*\*(?P<bold>.+?)\*\*(?:\s*(?P<rest>.*))?$')

def choose_level(bold_text: str) -> int:
    t = bold_text.strip().lower()
    # Steps are small actionable items -> deeper heading
    if re.match(r'step\s*\d+', t):
        return 4
    # Short labels that are subsection-like
    labels_lvl3 = ['concept', 'common objections', 'common objection', 'frequent questions', 'topic-specific questions',
                   'top 10 verbs', 'top 10 verbs most used in objections', 'usage in section b', 'quick reference']
    for lab in labels_lvl3:
        if lab in t:
            return 3
    # Default to level 3 for bold full-line patterns
    return 3


def transform_lines(lines):
    out = []
    for i, line in enumerate(lines):
        m = BOLD_LINE_RE.match(line.rstrip('\n'))
        if not m:
            out.append(line)
            continue
        indent = m.group('indent') or ''
        bold = m.group('bold') or ''
        rest = m.group('rest') or ''
        # If bold text looks already like a markdown heading (rare), skip
        if bold.strip().startswith('#'):
            out.append(line)
            continue
        level = choose_level(bold)
        heading_text = bold.rstrip(':').strip()
        heading = f"{indent}{'#' * level} {heading_text}\n"
        out.append(heading)
        # If there is trailing inline content, place it as a new paragraph after a blank line
        if rest:
            # If rest already begins with punctuation or quote, keep as-is
            out.append('\n')
            out.append(f"{indent}{rest.strip()}\n")
        else:
            # preserve a blank line after headings for readability
            out.append('\n')
    return out


def backup_file(path: Path) -> Path:
    ts = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    bak = path.with_suffix(path.suffix + f'.bak.{ts}')
    shutil.copy2(path, bak)
    return bak


def main():
    p = argparse.ArgumentParser(description='Normalize bold full-line patterns into Markdown headings')
    p.add_argument('--file', '-f', type=Path, default=Path('docusaurus/docs/original.md'), help='Markdown file to process')
    p.add_argument('--in-place', action='store_true', help='Overwrite the input file (creates a backup)')
    p.add_argument('--dry-run', action='store_true', help='Print proposed changes to stdout instead of writing')
    args = p.parse_args()

    src = args.file
    if not src.exists():
        print(f"Error: file not found: {src}")
        return 2

    lines = src.read_text(encoding='utf-8').splitlines(keepends=True)
    transformed = transform_lines(lines)

    if args.dry_run:
        print('--- DRY RUN OUTPUT ---\n')
        print(''.join(transformed))
        return 0

    if args.in_place:
        bak = backup_file(src)
        print(f'Backup created: {bak}')
        src.write_text(''.join(transformed), encoding='utf-8')
        print(f'Updated file written: {src}')
        return 0

    # If not in-place, write to stdout (safe default)
    print(''.join(transformed))
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
