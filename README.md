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

Three reusable components are available — import them at the top of a day's `.mdx` file (see
`day-01.mdx` for a live example) and drop them into the content wherever they're useful:

- **`<DayQuiz questions={[...]} />`** — an end-of-lesson self-check. Pass an array of
  `{ q, options, correct, explain }` objects; each question reveals correct/incorrect state
  and an explanation on click, with a "try again" reset once all are answered.
- **`<TrainingInferenceDiagram />`** — the Day 1 training-vs-inference diagram, kept as an
  example of a themed inline-SVG/HTML diagram component (rather than a raster image) so it
  matches light/dark mode. Copy this pattern for other days that need a custom diagram.
- **`<DayApply>…</DayApply>`** — wrap the hands-on part of a lesson (an exercise, a prompt to
  try, the `<DayQuiz>`) in this and it's lifted into the page's **Apply** tab, separate from
  the narrative content in **Read**. See "Read / Apply / Discuss tabs" below.

Every published day automatically gets a sticky in-page table of contents (desktop only,
scroll-spy highlighted) and a reading-progress bar under the header — both are generated from
whatever `##` headings exist in that day's content, so there's nothing to maintain manually.

### Read / Apply / Discuss tabs

Every published day page is split into three tabs, rendered by `DayTabs.astro`:

- **Read** — the lesson content, exactly as written in the `.mdx` file (minus anything wrapped
  in `<DayApply>`).
- **Apply** — whatever's wrapped in `<DayApply>…</DayApply>` (see above), plus a "Mark Day N
  done" button. A day with no `<DayApply>` block just shows an empty state here — nothing
  breaks. `day-01.mdx` wraps its "Check yourself" quiz in `<DayApply>` as the reference
  example.
- **Discuss** — a placeholder for now ("coming soon"). There's no comment backend wired up;
  adding real shared discussion later (e.g. [giscus](https://giscus.app), backed by GitHub
  Discussions on this repo) is a deliberate follow-up, not done here.

Alongside the tabs, every published day has a **private note** box (saved to `localStorage`,
per day, per browser — never sent anywhere).

### Progress, streaks, and the homepage track

There are no accounts. "Mark Day N done" (in the Apply tab) writes to `localStorage` on the
visitor's own browser — see `src/lib/progress.ts`. That drives:

- The homepage's vertical **track** — each day shows as done / up-next / not-started, per
  visitor, replacing the old plain day-grid.
- The hero's **"Resume Day N"** button, once at least one day is marked done.
- A simple **day streak** (consecutive calendar days with a completion) shown once a visitor
  has progress.

Since progress is per-browser only, it won't follow a visitor across devices — that's a known
tradeoff of having no backend, not a bug.

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
  lib/progress.ts                         ← localStorage progress/streak helpers (no backend, no accounts)
  components/
    DayToc.astro                          ← sticky in-page table of contents + scroll-spy
    ModelLandscape.astro                  ← collapsible sidebar panel, shown on every day page
    DayQuiz.astro                         ← interactive end-of-lesson self-check quiz
    DayApply.astro                        ← marks hands-on content to lift into the Apply tab
    DayTabs.astro                         ← Read / Apply / Discuss tabs + private note + mark-done
    TrainingInferenceDiagram.astro        ← example themed diagram component (Day 1)
  layouts/
    BaseLayout.astro                      ← header, footer, dark-mode toggle
    DayLayout.astro                       ← per-day page chrome (progress bars, TOC slot, pager, placeholder state)
  pages/
    index.astro                           ← homepage / track view (per-visitor progress)
    day/[day].astro                       ← renders each day from its .mdx file
  styles/global.css                       ← design system (colors, type, components)
```

## Design

Clean, professional/corporate style intended to read well for a business-leader audience.
Supports light and dark mode (auto by system preference, with a manual toggle). Each week has
its own accent color; hands-on days (7, 21, 30) get a distinct badge.

## Future interactivity

The site is built with Astro specifically so it can grow beyond static content without a
rewrite. Per-day quizzes, a "Mark done" button, `localStorage` progress/streaks, and a
homepage track view are already in place (see "Progress, streaks, and the homepage track"
above). Natural next steps: a glossary widget, accounts (so progress follows a visitor across
devices), and real shared discussion on the Discuss tab (e.g. giscus). Add these as Astro
islands (React/Vue/Svelte/vanilla) inside individual day pages or layouts when ready.

## Deploying

Static output (`npm run build` → `./dist/`), deployable to GitHub Pages, Netlify, Vercel,
Cloudflare Pages, or any static host.
