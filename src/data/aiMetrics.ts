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
// How to keep this current: re-read on review — check whether a newly
// common metric (in vendor pitches, analyst reports, etc.) is missing,
// and add a plain-English definition for it. Don't add a term without a
// definition you're confident is accurate and genuinely in common use.

export const lastReviewed = '2026-08-22';

export interface Metric {
  name: string;
  definition: string;
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
    category: 'Adoption & usage',
  },
  {
    name: 'Production vs. pilot status',
    definition: 'Whether an AI system is actually running as part of a real business process (production), or still an informal, small-scale trial (pilot). Widely tracked at an industry level because far more AI activity sits in pilot than production.',
    category: 'Adoption & usage',
    courseDay: 20,
  },

  // ---------------- Quality & reliability ----------------
  {
    name: 'Eval pass rate',
    definition: 'The percentage of test cases in a structured evaluation that an AI system answers correctly or acceptably — a real, comparable measure of quality, as opposed to a subjective impression from a demo.',
    category: 'Quality & reliability',
    courseDay: 15,
  },
  {
    name: 'Hallucination / error rate',
    definition: "How often an AI system produces a confident but incorrect answer. Harder to measure than it sounds, since it requires a known-correct answer to check against — which is exactly what an eval's test set provides.",
    category: 'Quality & reliability',
    courseDay: 16,
  },
  {
    name: 'Precision and recall',
    definition: "Two classic accuracy measures, often reused for AI outputs: precision is what share of the system's flagged results were actually correct; recall is what share of the real cases it actually caught. A spam filter that flags too much has a precision problem; one that misses too much has a recall problem — the same tradeoff applies to most classification-style AI tasks.",
    category: 'Quality & reliability',
  },
  {
    name: 'Human review / escalation rate',
    definition: 'How often an AI system\'s output gets flagged, corrected, or escalated to a person before it\'s trusted — a practical signal of how much the system can genuinely be left to run on its own versus how much oversight it still needs.',
    category: 'Quality & reliability',
    courseDay: 25,
  },

  // ---------------- Speed & efficiency ----------------
  {
    name: 'Cycle time / time-to-completion',
    definition: 'How long a task or process takes from start to finish with AI involved, compared to the same task before. The single most commonly cited "productivity" number in AI adoption stories — and the one most worth checking was measured against a real baseline, not a guess.',
    category: 'Speed & efficiency',
    courseDay: 27,
  },
  {
    name: 'Time saved per user',
    definition: "An estimate of how much time an individual user saves per task, day, or week using an AI tool. Useful as a starting signal, but this course's own lesson on ROI applies directly: time saved is a productivity claim, not proof of real business impact, until it's traced to an actual cost or output change.",
    category: 'Speed & efficiency',
    courseDay: 27,
  },
  {
    name: 'Throughput',
    definition: 'How much output a person or team produces in a given period with AI involved — for example, pull requests merged per engineer per week, or tickets resolved per support agent per day. Where this is tracked, it\'s worth checking whether quality was tracked alongside it, not just volume.',
    category: 'Speed & efficiency',
  },

  // ---------------- Cost & ROI ----------------
  {
    name: 'Cost per request / cost per task',
    definition: 'How much a single AI interaction or completed task actually costs, once tokens, caching, and model choice are all accounted for — the practical unit economics behind an AI bill.',
    category: 'Cost & ROI',
    courseDay: 18,
  },
  {
    name: 'ROI (Return on Investment)',
    definition: "The value an AI project produces relative to what it costs to build and run — and, per this course's own lesson, only meaningful once traced all the way to a real cost saved, output gained, or revenue impact, not stopped at a productivity claim.",
    category: 'Cost & ROI',
    courseDay: 27,
  },
  {
    name: 'Payback period',
    definition: 'How long it takes for an AI project\'s cumulative value to cover its cumulative cost — a standard way to compare AI investments against any other capital or budget decision, using the same P&L discipline as Day 27\'s ROI framework.',
    category: 'Cost & ROI',
    courseDay: 27,
  },
];
