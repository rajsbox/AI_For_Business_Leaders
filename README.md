# AI Fluency for Leaders — Course Website

A 30-day AI fluency course for business leaders, built with [Astro](https://astro.build) +
MDX (Markdown with optional interactive components). Course structure lives in
[30-Day-AI-Fluency-Course.md](30-Day-AI-Fluency-Course.md); each day's actual lesson content
lives in its own `.mdx` file under `src/content/days/`.

## Daily workflow

Each day, add that day's content to its file:

1. Open `src/content/days/day-NN.mdx` (e.g. `day-01.mdx` for Day 1).
2. Paste in the lesson content below the frontmatter — Markdown (headings, lists, bold,
   tables, blockquotes, code) all render automatically. Use `##` for each major section —
   the in-page table of contents and scroll-spy are generated from those headings.
3. Set `published: true` in the frontmatter.
4. Optionally fill in `summary` (used for future listing/search features).
5. Run `npm run dev` and check `http://localhost:4321/day/NN`.

That's it — the homepage roadmap and prev/next navigation update automatically based on the
`published` flag and the day/week numbers in the frontmatter.

### Adding interactive elements to a day

Two reusable components are available — import them at the top of a day's `.mdx` file (see
`day-01.mdx` for a live example) and drop them into the content wherever they're useful:

- **`<DayQuiz questions={[...]} />`** — an end-of-lesson self-check. Pass an array of
  `{ q, options, correct, explain }` objects; each question reveals correct/incorrect state
  and an explanation on click, with a "try again" reset once all are answered.
- **`<TrainingInferenceDiagram />`** — the Day 1 training-vs-inference diagram, kept as an
  example of a themed inline-SVG/HTML diagram component (rather than a raster image) so it
  matches light/dark mode. Copy this pattern for other days that need a custom diagram.

Every published day automatically gets a sticky in-page table of contents (desktop only,
scroll-spy highlighted) and a reading-progress bar under the header — both are generated from
whatever `##` headings exist in that day's content, so there's nothing to maintain manually.

### Keeping the Model Landscape panel current

Every day page (published or not) shows a collapsible **📡 Model Landscape** panel in the
sidebar — a running reference table of frontier and open-weight models, their context windows,
and where they're offered. It's driven by one shared file:

```
src/data/models.ts
```

Edit that file directly (or tell me the update and I'll edit it) — every day page picks up the
change automatically, no per-day edits needed. Parameter counts for closed-weight frontier
models (Claude, GPT, Gemini) are intentionally shown as "Undisclosed" rather than guessed,
since those labs don't publish them; open-weight models (Llama, Mistral, DeepSeek, etc.) show
real published figures. Bump `modelsLastUpdated` in that file whenever you refresh it.

### Example frontmatter

```yaml
---
day: 1
week: 1
title: "How LLMs Actually Work — Tokens, Parameters, Training vs Inference"
summary: "A plain-English tour of tokens, parameters, training vs inference."
published: true
handsOn: false
duration: "45–60 min"
---

## What you'll learn
...
```

## Commands

Run these from the project root in a terminal:

| Command             | Action                                            |
| -------------------- | -------------------------------------------------- |
| `npm install`         | Install dependencies                                |
| `npm run dev`          | Start local dev server at `localhost:4321`          |
| `npm run build`        | Build production site to `./dist/`                  |
| `npm run preview`      | Preview the production build locally                |

## Project structure

```
src/
  content/days/day-01.mdx ... day-30.mdx  ← daily lesson content (edit these)
  content.config.ts                       ← frontmatter schema for day files
  data/course.ts                          ← course structure (titles, weeks) — single source of truth for nav
  data/models.ts                          ← Model Landscape panel data — edit to update every day page at once
  components/
    DayToc.astro                          ← sticky in-page table of contents + scroll-spy
    ModelLandscape.astro                  ← collapsible sidebar panel, shown on every day page
    DayQuiz.astro                         ← interactive end-of-lesson self-check quiz
    TrainingInferenceDiagram.astro        ← example themed diagram component (Day 1)
  layouts/
    BaseLayout.astro                      ← header, footer, dark-mode toggle
    DayLayout.astro                       ← per-day page chrome (progress bars, TOC slot, pager, placeholder state)
  pages/
    index.astro                           ← homepage / full roadmap
    day/[day].astro                       ← renders each day from its .mdx file
  styles/global.css                       ← design system (colors, type, components)
```

## Design

Clean, professional/corporate style intended to read well for a business-leader audience.
Supports light and dark mode (auto by system preference, with a manual toggle). Each week has
its own accent color; hands-on days (7, 21, 30) get a distinct badge.

## Future interactivity

The site is built with Astro specifically so it can grow beyond static content without a
rewrite — e.g. per-day quizzes, a glossary widget, progress tracking (localStorage or an
account), or embedded interactive components. Add these as Astro islands
(React/Vue/Svelte/vanilla) inside individual day pages or layouts when ready.

## Deploying

Static output (`npm run build` → `./dist/`), deployable to GitHub Pages, Netlify, Vercel,
Cloudflare Pages, or any static host.
