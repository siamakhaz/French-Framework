# Repository Guidelines

## Project Structure & Module Organization
- `docusaurus/`: Docusaurus site. Edit docs in `docs/` (e.g., `section_A`, `section_B`, `original.md`); generated output lives in `.docusaurus/` and `build/` (do not edit). Shared assets belong in `static/`. Minimal site styles sit in `src/css/custom.css`.
- Root teaching materials (`TEF-CANADA-Expression-Oral.md`, `TEF-Canada-Expression-Orale-150-Topics.pdf`) and `section_B/topic.md` are content sources; keep `docusaurus/docs/README.md` links in sync when moving files.
- `package-lock.json` files pin dependencies; prefer `npm ci` for reproducible installs.

## Build, Test, and Development Commands
Run commands from `docusaurus/`:
- `npm ci` (or `npm install`): install dependencies using the checked-in lockfile.
- `npm run start`: launch the dev server with hot reload at `http://localhost:3000`.
- `npm run build`: produce the static site in `build/`; fails on broken links or missing frontmatter.
- `npm run serve`: serve the built site locally for QA.
- `npm run deploy`: publish using the configured deployment target.
- `npm run swizzle`: scaffold theme/component overrides; prefer this over manual copying.

## Coding Style & Naming Conventions
- Markdown/MDX: include frontmatter (`title`, `sidebar_label`, optional `slug`); use a single H1; keep relative links; place assets in `static/` and reference via `/` paths.
- Components/CSS: prefer functional React components (PascalCase files), camelCase helpers, 2-space indent, and semicolons; use CSS variables in `custom.css` with kebab-case naming.
- File naming: group docs under section folders; use hyphenated slugs for URLs and filenames.

## Testing Guidelines
- No automated tests; rely on Docusaurus checks. Run `npm run build` before PRs to catch broken links and MDX errors. For docs-heavy changes, smoke test with `npm run start` and navigate key sidebar links.

## Commit & Pull Request Guidelines
- Commits: imperative, concise summaries (e.g., "Add Section B grammar updates"); avoid bundling dependency/vendor/build outputs.
- PRs: describe scope and motivation, list commands run, note content affected; attach screenshots if UI or styling changes; link issues/tasks. Request review when navigation works and builds pass.

## Security & Configuration Tips
- Do not commit secrets or private URLs; prefer environment variables for deployment targets. Validate Node.js >=18 for compatibility with Docusaurus 3.x.
