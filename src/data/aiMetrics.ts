// A consolidated reference of the metrics organizations actually use to
// measure AI outcomes. Two kinds of entries:
//   - "fromCourse": a metric already taught on a specific day — kept to
//     one line here plus a pointer back to that day, not re-explained.
//   - New entries: metrics the 30-day course didn't formally name, defined
//     plainly here for the first time.
//
// This is a glossary, not a statistics page — no global survey figures or
// aggregator statistics belong here (see adoptionStories.ts for the
// sourcing discipline that applies if real numbers are ever added).
//
// On `range` and `howToMeasure`: deliberately NOT "what a good score looks
// like" — most of these metrics have no universal healthy number (a 70%
// eval pass rate is fine for a low-stakes internal tool and dangerous for
// a medical one; see Day 15/16). `range` states the metric's actual unit
// and mathematical bounds (e.g. "0-100%, a ratio"). `howToMeasure` states
// the real calculation or data you'd need, in plain terms. Never invent a
// "good benchmark" number to fill these in — that would be exactly the
// fabrication this course's own Day 20/27 warn against.
//
// How to keep this current: re-read on review — check whether a newly
// common metric (in vendor pitches, analyst reports, etc.) is missing,
// and add a plain-English definition, range, and how-to-measure for it.
// Don't add a term without being confident all three are accurate.

export const lastReviewed = '2026-08-22';

export interface Metric {
  name: string;
  definition: string;
  /** The metric's unit and mathematical bounds — not a "good score." */
  range: string;
  /** The actual calculation or data needed to produce this number. */
  howToMeasure: string;
  /** Which "family" of outcome this measures — for grouping on the page. */
  category: 'Adoption & usage' | 'Quality & reliability' | 'Speed & efficiency' | 'Cost & ROI';
  /** If this metric was already taught on a specific day, name it — omit for new entries. */
  courseDay?: number;
}

export const aiMetrics: Metric[] = [
  // ---------------- Adoption & usage ----------------
  {
    name: 'Adoption rate',
    definition: 'The share of intended users (a team, a department, a whole company) actually using an AI tool regularly, as opposed to it being available but ignored. A high license count with a low adoption rate usually signals a change-management problem, not a technology one.',
    range: '0-100%. What counts as "healthy" depends entirely on the tool and how mandatory it is — there is no universal target.',
    howToMeasure: 'Active users in a defined period (e.g. weekly) ÷ total intended users, from the tool\'s own usage logs or license/seat data. Define "active" consistently (e.g. at least one real task per week) so the number doesn\'t drift with a loose definition.',
    category: 'Adoption & usage',
  },
  {
    name: 'Production vs. pilot status',
    definition: 'Whether an AI system is actually running as part of a real business process (production), or still an informal, small-scale trial (pilot). Widely tracked at an industry level because far more AI activity sits in pilot than production.',
    range: 'Not a number — a status (pilot / production), sometimes tracked as a simple count or percentage of a company\'s AI projects in each state.',
    howToMeasure: 'A project counts as "production" once real users or customers depend on its output without a person re-doing the work from scratch — the practical test from Day 20, not a launch announcement.',
    category: 'Adoption & usage',
    courseDay: 20,
  },

  // ---------------- Quality & reliability ----------------
  {
    name: 'Eval pass rate',
    definition: 'The percentage of test cases in a structured evaluation that an AI system answers correctly or acceptably — a real, comparable measure of quality, as opposed to a subjective impression from a demo.',
    range: '0-100%. The right target is set by the task\'s stakes (Day 16), not a universal number — a low-stakes draft tool and a compliance-relevant tool don\'t share a bar.',
    howToMeasure: 'Correct or acceptable results ÷ total test cases in the eval set (Day 15). Only meaningful if the test set includes real, hard, and edge cases — not just the easy ones a demo naturally gravitates toward.',
    category: 'Quality & reliability',
    courseDay: 15,
  },
  {
    name: 'Hallucination / error rate',
    definition: "How often an AI system produces a confident but incorrect answer. Harder to measure than it sounds, since it requires a known-correct answer to check against — which is exactly what an eval's test set provides.",
    range: '0-100%, or expressed as errors per N responses. No safe universal number — this is the flip side of eval pass rate, and the acceptable rate depends entirely on the stakes of being wrong.',
    howToMeasure: 'Incorrect-but-confident answers ÷ total answers checked, verified against ground truth (a known-correct answer, not another AI\'s opinion) — the same eval-set discipline as pass rate, applied to counting the failures instead of the successes.',
    category: 'Quality & reliability',
    courseDay: 16,
  },
  {
    name: 'Precision and recall',
    definition: "Two classic accuracy measures, often reused for AI outputs: precision is what share of the system's flagged results were actually correct; recall is what share of the real cases it actually caught. A spam filter that flags too much has a precision problem; one that misses too much has a recall problem — the same tradeoff applies to most classification-style AI tasks.",
    range: 'Both 0-100% (or 0-1 as a ratio). They trade off against each other — pushing one up typically pushes the other down, so neither should be read alone.',
    howToMeasure: 'Precision = correctly flagged results ÷ all results the system flagged. Recall = correctly flagged results ÷ all results that should have been flagged. Both require a known-correct answer set to check against, same as an eval.',
    category: 'Quality & reliability',
  },
  {
    name: 'Human review / escalation rate',
    definition: 'How often an AI system\'s output gets flagged, corrected, or escalated to a person before it\'s trusted — a practical signal of how much the system can genuinely be left to run on its own versus how much oversight it still needs.',
    range: '0-100%. A high rate isn\'t automatically bad — for a high-stakes task, it may reflect the human-in-the-loop design choice from Day 25, not a quality failure.',
    howToMeasure: 'Outputs escalated, corrected, or overridden by a person ÷ total outputs produced, from whatever review or approval workflow sits around the system.',
    category: 'Quality & reliability',
    courseDay: 25,
  },

  // ---------------- Speed & efficiency ----------------
  {
    name: 'Cycle time / time-to-completion',
    definition: 'How long a task or process takes from start to finish with AI involved, compared to the same task before. The single most commonly cited "productivity" number in AI adoption stories — and the one most worth checking was measured against a real baseline, not a guess.',
    range: 'A duration (minutes, hours, days) or a percentage change versus baseline — not bounded, and highly task-specific.',
    howToMeasure: 'Time from task start to completion, measured the same way before and after AI involvement (Day 27\'s "real baseline" step) — timestamps from whatever system tracks the work, not a person\'s estimate of how much faster it feels.',
    category: 'Speed & efficiency',
    courseDay: 27,
  },
  {
    name: 'Time saved per user',
    definition: "An estimate of how much time an individual user saves per task, day, or week using an AI tool. Useful as a starting signal, but this course's own lesson on ROI applies directly: time saved is a productivity claim, not proof of real business impact, until it's traced to an actual cost or output change.",
    range: 'A duration per period (e.g. hours/week) — not bounded, and easy to overstate if it\'s self-reported rather than measured.',
    howToMeasure: 'Baseline time for a task minus AI-assisted time for the same task, ideally measured directly rather than asked as a survey question — self-reported time savings tend to run higher than what logs actually show.',
    category: 'Speed & efficiency',
    courseDay: 27,
  },
  {
    name: 'Throughput',
    definition: 'How much output a person or team produces in a given period with AI involved — for example, pull requests merged per engineer per week, or tickets resolved per support agent per day. Where this is tracked, it\'s worth checking whether quality was tracked alongside it, not just volume.',
    range: 'A count per period (e.g. items/week) — not bounded, and meaningless without a matched quality metric alongside it.',
    howToMeasure: 'Units of completed output ÷ time period, from whatever system already tracks that output (a ticketing system, a code repository) — always paired with a quality check, since raw volume alone can rise while quality quietly falls.',
    category: 'Speed & efficiency',
  },

  // ---------------- Cost & ROI ----------------
  {
    name: 'Cost per request / cost per task',
    definition: 'How much a single AI interaction or completed task actually costs, once tokens, caching, and model choice are all accounted for — the practical unit economics behind an AI bill.',
    range: 'A currency amount — not bounded, and only comparable across tools if measured the same way (Day 18\'s caching and right-sizing choices change this number without changing what the product does).',
    howToMeasure: 'Total AI spend for a period ÷ number of requests or completed tasks in that period, from vendor billing data — broken out by task type where possible, since a blended average hides which tasks are actually expensive.',
    category: 'Cost & ROI',
    courseDay: 18,
  },
  {
    name: 'ROI (Return on Investment)',
    definition: "The value an AI project produces relative to what it costs to build and run — and, per this course's own lesson, only meaningful once traced all the way to a real cost saved, output gained, or revenue impact, not stopped at a productivity claim.",
    range: 'Usually expressed as a percentage or a ratio (e.g. "3x return") — not bounded, and can be negative if the project cost more than it returned.',
    howToMeasure: '(Value produced − cost to build and run) ÷ cost to build and run, where "value produced" is a real P&L line (Day 27) — not a productivity claim like time saved, unless that time saved has been traced to an actual cost reduction or output gain.',
    category: 'Cost & ROI',
    courseDay: 27,
  },
  {
    name: 'Payback period',
    definition: 'How long it takes for an AI project\'s cumulative value to cover its cumulative cost — a standard way to compare AI investments against any other capital or budget decision, using the same P&L discipline as Day 27\'s ROI framework.',
    range: 'A duration (months, years) — not bounded, and shorter isn\'t automatically better if it comes from an inflated value estimate rather than real P&L impact.',
    howToMeasure: 'Total upfront and ongoing cost ÷ value produced per period, run forward until cumulative value equals cumulative cost — using the same real, P&L-traced value figure as the ROI calculation above, not a productivity estimate.',
    category: 'Cost & ROI',
    courseDay: 27,
  },
];
