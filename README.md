# French TEF Oral Exam Framework

A comprehensive Docusaurus-based learning platform for TEF Canada oral expression preparation, featuring section-by-section content, grammar guides, vocabulary lists, and interactive playbooks.

## Project Structure

```
.
├── docusaurus/          # Docusaurus 3.x site (docs, config, build)
│   ├── docs/            # Source markdown files (section_A, section_B, original.md, etc.)
│   ├── static/          # Assets (PDFs, images, etc.)
│   ├── src/css/         # Custom CSS styles
│   ├── build/           # Generated static site (production build output)
│   ├── sidebars.js      # Navigation sidebar configuration
│   ├── docusaurus.config.js
│   └── package.json
├── section_B/           # Reference content for section B (topic.md)
├── AGENTS.md            # Repository guidelines & module organization
├── .gitignore           # Git ignore rules for Node, Docusaurus, OS/editor files
└── README.md            # This file
```

## Quick Start

### Prerequisites
- Node.js >= 18
- npm (or yarn/pnpm)

### Install & Run

```bash
cd docusaurus
npm ci
npm run start
```

The dev server launches at `http://localhost:3000` with hot reload.

## Available Commands

Run these commands from the `docusaurus/` directory:

| Command | Purpose |
|---------|---------|
| `npm ci` | Install dependencies using the locked package-lock.json |
| `npm run start` | Start dev server with hot reload (port 3000) |
| `npm run build` | Build static site to `build/` (checks for broken links/MDX errors) |
| `npm run serve` | Serve the built site locally for QA |
| `npm run deploy` | Publish using configured deployment target |
| `npm run swizzle` | Scaffold theme/component overrides |

## Content Organization

### Docs Source (`docusaurus/docs/`)
- **`section_A/`** — Questions, grammar, vocabulary, playbooks, and conjugations for Section A
- **`section_B/`** — Grammar, playbooks, topics, and vocabulary for Section B
- **`original.md`** — Original TEF Canada Expression Oral reference
- **`tef-exam.md`** — Exam overview and guidelines
- **`README.md`** — Docs index

### Static Assets (`docusaurus/static/`)
- `TEF-Canada-Expression-Orale-150-Topics.pdf` — Topic reference document
- Other supporting materials

## Key Files

- **`docusaurus.config.js`** — Site config (title, URL, deploy settings, plugins)
- **`sidebars.js`** — Sidebar navigation structure
- **`src/css/custom.css`** — Global and CSS variable overrides
- **`AGENTS.md`** — Guidelines for module organization, naming conventions, testing, and commit practices

## Git & CI/CD

- **Branch:** `main`
- **Repository:** `siamakhaz/French-Framework`
- **Ignore Rules:** See `.gitignore` (Node modules, build artifacts, env files, OS/editor files)

> **Note:** `docusaurus/node_modules/` and `docusaurus/build/` are currently tracked in Git history. Consider running `git rm -r --cached` on these directories and relying on the `.gitignore` rules to prevent future commits of generated artifacts.

## Testing & QA

- **No automated tests.** Validation relies on Docusaurus build checks.
- Run `npm run build` before PRs to catch broken links and MDX errors.
- For content-heavy changes, smoke test with `npm run start` and navigate key sidebar links.

## Code Style & Conventions

- **Markdown/MDX:** Include frontmatter (`title`, `sidebar_label`, optional `slug`); single H1 per doc; relative links; assets in `/static/` with `/` paths
- **Components/CSS:** Functional React (PascalCase files), camelCase helpers, 2-space indent, semicolons; CSS variables in `custom.css` (kebab-case)
- **File naming:** Hyphenated slugs for URLs and filenames; group docs under section folders

## Security

- Do not commit `.env` files or private URLs; use environment variables for deployment targets
- No secrets or credentials in the repo

## Deployment

See `docusaurus.config.js` for the configured deployment target and auth. Run `npm run deploy` from `docusaurus/` to publish.

## Contributing

1. Create or edit docs in `docusaurus/docs/`
2. Update `sidebars.js` if changing navigation
3. Run `npm run build` to validate (must pass without errors)
4. Commit with an imperative message (e.g., "Add Section B grammar updates")
5. Submit PR with scope, motivation, and verification steps

## License

See repository for license details.
