# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for alexevans.click, built with Eleventy 3.

## Git

- Do not commit or push unless explicitly asked. Leave changes uncommitted so the owner can review and commit them.
- Commit messages are a single subject line with no description/body, unless the owner explicitly asks for one. Never write a description/body.
- Never add `Co-Authored-By` trailers or any Claude attribution to commit messages or PR descriptions.

## Commands

- `npm start` — dev server with live reload (`eleventy --serve`, http://localhost:8080)
- `npm run build` — build into `_site/`

There are no tests or linters.

## Structure

- `src/` is the Eleventy input; `.eleventy.js` holds the config.
- Pages (`src/index.html`, `src/work.njk`, `src/contact.md`) get `layout: base.njk` from global data set in `.eleventy.js`, so it isn't repeated in front matter. The layout pulls in `header.njk` and `footer.njk` from `src/_includes/`.
- Work entries are one Markdown file each in `src/work/` (front matter: `title`, `order`, optional `tech`, `links` list; body is the description). `src/work/work.json` sets `permalink: false` so they render only as cards in `src/work.njk`, sorted by `order` via the `work` collection.
- External `http(s)` links written in Markdown get `target="_blank" rel="noopener noreferrer"` automatically (markdown-it rule in `.eleventy.js`). Links in templates need it written by hand.
- Colors and font stacks are CSS variables in `:root` at the top of `src/css/styles.css`.
- `.md` and `.html` pages are processed with Liquid (Eleventy's default), not Nunjucks; only `.njk` files use Nunjucks.
- Site navigation is hard-coded in `src/_includes/header.njk`; a new page needs a link added there.
- Only `src/css` and `src/images` are passthrough-copied. Any new static asset folder needs its own `addPassthroughCopy` in `.eleventy.js`.

## Deployment

- Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
- `_site/` is gitignored. Never commit built output.
- The custom domain is set in the repo's Pages settings, so no `CNAME` file is needed.
