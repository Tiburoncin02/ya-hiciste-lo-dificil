# AGENTS.md

Overview of this codebase for developers and AI agents.

## Project Overview

A single-page, single-scroll interactive landing page: a personal recordatorio for someone about
to complete a final academic administrative step. Five sections in order: hero reminder, career
metrics, emotional validation, a scripture anchor, and an interactive closing question that
submits a Netlify form. No backend data model, no multi-page navigation — this is intentionally a
one-route site.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes) + CSS custom properties for the palette |
| Forms | Netlify Forms (AJAX submission) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── placeholder.png
│   └── __forms.html        # Static skeleton so Netlify's build bot detects the "antojo" form
├── src
│   ├── components
│   │   └── Reveal.tsx       # IntersectionObserver-based scroll-reveal wrapper
│   ├── routes
│   │   ├── __root.tsx       # Root layout: head metadata, imports styles.css
│   │   └── index.tsx        # The entire landing page (all 5 sections)
│   ├── router.tsx           # TanStack Router setup
│   └── styles.css           # Fonts, color variables, keyframe animations
├── netlify.toml
├── package.json
├── tsconfig.json             # @/* path alias for src/*
└── vite.config.ts
```

## Key Concepts

### Single route, section-based page

Everything lives in `src/routes/index.tsx`. There is no reason to split sections into separate
route files — this is a one-screen scroll experience, not a multi-page site. If new sections are
added, keep them in the same file unless a section grows complex enough to need local state that
would clutter the main component.

### Scroll reveal

`src/components/Reveal.tsx` wraps children in a `div` that fades/slides in once it enters the
viewport (via `IntersectionObserver`), with an optional `delay` prop for staggering. Used
throughout `index.tsx` instead of a heavier animation library.

### Netlify Forms

The closing section submits the chosen or custom "antojo" via AJAX to `/__forms.html` (not `/`,
since TanStack Start's SSR handler would otherwise intercept the POST). `public/__forms.html`
is a hidden static form that exists only so Netlify's build bot registers the `antojo` form at
deploy time — it is never rendered to users. If new fields are added to the form in
`index.tsx`, mirror them in `public/__forms.html` or submissions will be rejected.

### Design tokens

Color and typography tokens are CSS custom properties defined in `src/styles.css` (`--forest`,
`--gold`, `--ivory`, `--rose`, etc.), paired with the `Fraunces` (display/serif) and `Sora`
(body) Google Fonts. Prefer reusing these variables over introducing new colors inline.

## Development Commands

```bash
pnpm install
pnpm dev              # vite dev, port 3000
netlify dev --port 8889   # full Netlify emulation (forms, functions, etc.)
pnpm build
```

## Conventions

- Components: PascalCase, one per file in `src/components/`.
- Import paths use the `@/` alias for `src/*`.
- Tailwind utility classes for layout/spacing; CSS variables (via `var(--token)` in Tailwind
  arbitrary values, e.g. `bg-[var(--forest)]`) for anything tied to the palette.
- TypeScript strict mode is on — no `any`, no unused locals/params.
