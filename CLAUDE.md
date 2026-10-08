# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Kinshuk Narang (GenAI Engineer). React 19 + Vite 8 + Tailwind CSS v4, single page, no router, no backend. There is no test suite or linter configured.

## Commands

```bash
npm install
npm run dev       # dev server (port 5173 is often taken on this machine; use `npx vite --port 5199 --strictPort`)
npm run build     # production build → dist/  (the only automated check — run it after every change)
npm run preview   # serve dist/ locally
```

Deployment: Netlify builds from GitHub (`netlify.toml`: `npm run build` → `dist`). Remote is `origin` → `github.com/kinshuk-coder/portfolio`, branch `main`; pushing redeploys.

## Architecture

**Content is data-driven.** All copy, links and lists live in `src/data/portfolio.js` (`profile`, `projects`, `experience`, `coursework`, `skills`, `achievements`, `hobbies`). Components only render it. Content edits should go there, not into JSX. Conventions the components rely on:
- Empty string for `image` / `github` / `live` / achievement `url` hides that element (projects without an image get a faux-terminal placeholder in `ProjectCard.jsx`).
- Projects render as one unfiltered carousel in array order (no categories or filter tabs — removed at the owner's request).
- `icon` fields are string keys looked up in a per-component map (`Skills.jsx`, `Achievements.jsx`, `Hobbies.jsx`). A new icon key needs an entry in that map; skills without an `icon` render a dot. react-icons names must exist in the installed version (e.g. `SiOpenai`, `SiLinkedin`, `SiPinecone` do not) — grep `node_modules/react-icons/<set>/index.d.ts` before using one.
- `experience[].period` matching /present/i is styled as the current role; `type: 'education'` switches the icon.

**Theming.** Colour tokens are CSS variables on `:root` and `.dark` in `src/index.css`, exposed to Tailwind via `@theme` as `bg`, `surface`, `surface-2`, `ink`, `muted`, `line`, `accent`, `accent-soft`, `sun` (so use `bg-surface`, `text-ink`, etc., not raw colours). Dark mode is class-based (`@custom-variant dark`); an inline script in `index.html` applies the saved theme before paint (default light), and `src/hooks/useTheme.js` toggles/persists it in localStorage.

**Shared UI patterns.**
- `SectionHeading` renders the signature two-tone heading (`dark` + `accent` words joined with no space; pass `spaced` to separate them). Spans are `inline-block` so long pairs wrap on mobile.
- `Reveal` (backed by `useReveal`, IntersectionObserver) adds the fade-up-on-scroll; wrap new blocks in it rather than adding animation libraries.
- `.display` class in `index.css` = heavy Archivo heading style. Fonts (Archivo, Inter, JetBrains Mono) load from Google Fonts in `index.html`.
- Section order is set in `src/App.jsx`; nav links (anchor `href="#id"`) are in `Navbar.jsx` and must match section `id`s.

**Static assets.** `public/resume.pdf` (Resume button), `public/hero-image.jpeg`, project screenshots in `public/projects/`. The source resume `.docx` and original images in the repo root are git-ignored; `resume.pdf` is exported from the `.docx` (via Word) whenever the resume changes, and site content should be kept in sync with it.

Layout must not overflow horizontally at 375px width (the project carousel scrolls inside its own `.no-scrollbar` container).
