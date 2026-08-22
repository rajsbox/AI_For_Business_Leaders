---
name: day-content
description: Use whenever drafting, writing, or revising a day's lesson content for the 30-Day AI Fluency Course (src/content/days/day-NN.mdx) — e.g. "write Day 5", "draft today's content", "update Day 12's lesson". Encodes the course's house style: plain English, generic relatable examples, a diagram where it earns its place, external hyperlinks on jargon, and a textbook-style glossary of that day's terms at the end. Not for site layout/component/design work — see the repo's other conventions for that.
---

# Day content — house style

The audience is a business leader with basic AI knowledge, not an engineer. Every day's
lesson must be readable by someone who has never trained a model and never will. When in
doubt, cut the jargon rather than explain it more cleverly.

## The five rules

### 1. Plain, simple English

- Short sentences. One idea per sentence.
- No unexplained acronyms, no insider phrasing, no borrowed engineering analogies that
  assume domain knowledge the reader doesn't have (e.g. don't explain an LLM concept via a
  "PID controller" or "control loop" analogy — a business leader doesn't have that either).
- If a sentence needs a semicolon or three subordinate clauses to hold together, split it.
- Prefer "the model doesn't remember you" over "state is not persisted across inference
  calls." Say the plain thing first; use the technical term only once, right after, as the
  label for what was just explained in plain words.

### 2. Generic, easy-to-relate examples

- Reach for everyday, universally-familiar comparisons: ordering coffee, a photocopier, a
  filing cabinet, a phone call, a restaurant kitchen — not a specific industry's tooling
  (no "DCS control loop," no "Kubernetes pod," no niche vertical jargon) unless that day's
  topic genuinely is that industry.
- One example per concept is enough. Don't stack three analogies for the same idea.

### 3. A picture where it actually helps

- Not every day needs a diagram. Add one only where a genuine before/after, flow, or
  comparison is easier to *see* than to read (Day 1's training-vs-inference split is the
  model case).
- Build it as a small themed Astro component, following the existing pattern in
  `src/components/TrainingInferenceDiagram.astro`: plain HTML/CSS (divs, borders, arrows),
  no external image files, matches the site's light/dark theme via the existing CSS custom
  properties (`--rule`, `--faint`, `--blue`, `--card`, etc. — see `src/styles/global.css`).
  Give the new component a name specific to that day's diagram (e.g.
  `RagFlowDiagram.astro`) — don't try to reuse or generalize Day 1's component across days.
- Import it at the top of the day's `.mdx` file and drop it inline where it's referenced,
  exactly like `<TrainingInferenceDiagram />` in `day-01.mdx`.

### 4. Jargon gets a hyperlink out

- The first time a load-bearing technical term appears (the ones a reader would need to
  look up — "RLHF," "Mixture-of-Experts," "context window," a named model, a named
  standard), link it as plain Markdown to one solid external explainer: vendor
  documentation, a well-known primer, or the canonical source (e.g. the paper or the
  standard's own site). `[Mixture-of-Experts](https://...)`.
- Pick sources that will still be a sane landing page in a year — official docs over a
  random blog post, Wikipedia over a hot-take article.
- Don't link a term the lesson already fully defines in plain English in the same
  paragraph — the link is for going *deeper*, not for words the reader already understands
  after reading the sentence.
- Don't over-link. A handful of links per day is right; linking every noun defeats the
  purpose.

### 5. A textbook-style glossary at the end

- Every day ends with a short "Glossary" block covering that day's important jargon terms
  only (not a running site-wide glossary — each day is self-contained).
- Use the `DayGlossary` component: `src/components/DayGlossary.astro`. Pass a `terms` array
  of `{ term, definition }` pairs.
  ```
  <DayGlossary terms={[
    { term: "Token", definition: "..." },
    { term: "Parameter", definition: "..." },
  ]} />
  ```
- Definitions are short, precise, and textbook-plain — one or two sentences, no analogies
  (the analogies already happened earlier in the lesson; this is the clean reference
  version a reader skims back to later).
- Include every term from that day's content that a reader would genuinely need spelled
  out — typically 3–6 terms. Don't pad it with terms already obvious from context.
- Place it after the lesson's main content and before `<DayApply>` (see day-01.mdx).

## Structure to follow (matches day-01.mdx)

```
---
day: N
week: W
title: "..."
summary: "..."
published: true
handsOn: false
duration: "45–60 min"
---

import DayQuiz from '../../components/DayQuiz.astro';
import DayApply from '../../components/DayApply.astro';
import DayGlossary from '../../components/DayGlossary.astro';
[+ any diagram component for this day]

One short paragraph: what today is actually for, in plain terms.

## [Section heading — plain language, not jargon]
...plain-English explanation, one relatable example, jargon term linked externally...

[<DiagramComponent /> inline where it helps, if this day has one]

## [Next section]
...

<DayGlossary terms={[
  { term: "...", definition: "..." },
  ...
]} />

<DayApply>
## Check yourself

<DayQuiz questions={[
  { q: "...", options: [...], correct: 0, explain: "..." },
  ...
]} />
</DayApply>
```

- Use `##` for every major section — the site auto-builds a table of contents and
  scroll-spy from these headings (`DayToc.astro`), so section titles should be short and
  descriptive on their own.
- End with a 3-question `DayQuiz` inside `<DayApply>`, same as Day 1 — this is what
  the course plan's "3 questions to test me" becomes on the site.
- Keep `duration` realistic; don't just copy `"45–60 min"` if the actual content is
  shorter or longer to read.

## Process

1. Read the day's topic from `30-Day-AI-Fluency-Course.md` and `src/data/course.ts` for
   exact title/week/handsOn.
2. Draft the lesson content following the five rules above.
3. Decide if a diagram earns its place; build one only if so.
4. Collect that day's jargon terms into a `DayGlossary` block at the end.
5. Write the day's `src/content/days/day-NN.mdx`, set `published: true`.
6. Run `npm run build` to confirm it compiles before considering the day done.

## What NOT to do

- Don't write for a technical/engineering audience "in case they want depth." That's what
  the external jargon links are for — depth is one click away, not inline.
- Don't invent statistics, benchmarks, or pricing figures. If a real number is genuinely
  needed and unknown, say so plainly rather than fabricating a plausible-looking one (same
  principle already applied to `src/data/models.ts`).
- Don't reuse a previous day's specific analogy or diagram unless the topic is genuinely
  the same idea revisited.
