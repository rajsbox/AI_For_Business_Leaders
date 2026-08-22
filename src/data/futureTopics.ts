// Headline-only list of AI topics not covered by the 30-day course, plus
// genuinely new developments since the course was written. Intentionally
// NOT lesson content — just a running list a leader can scan for what to
// learn next, or what's changed since Day 30.
//
// How to keep this current: review every ~2 days (ask Claude to "review
// the future topics page"). For each pass:
//   1. Check whether any headline here has since become common/settled
//      enough that it no longer needs flagging — remove it.
//   2. Check whether a new development in the AI field is genuinely new
//      information (not just a rehash of an existing headline) — add it.
//   3. Bump `lastReviewed` below whether or not anything changed, so the
//      page can show how fresh the list is.
//
// Keep every entry to a genuine HEADLINE — a topic name and one sentence
// of why it matters. No lesson content, no fabricated statistics, no
// invented specifics. If something is speculative or still unsettled,
// say so plainly rather than presenting it as fact.

export const lastReviewed = '2026-08-22';

export interface FutureTopic {
  headline: string;
  note: string;
  /** Rough category for grouping — keep short, matches the site's existing week/topic tone. */
  category: 'Not covered in the course' | 'New since Day 30 was written';
}

export const futureTopics: FutureTopic[] = [
  {
    headline: 'Fine-tuning, on its own terms',
    note: 'Day 11 compared fine-tuning to prompting and RAG at a decision-framework level, but never covered how fine-tuning actually works, what data it needs, or what it costs to run one.',
    category: 'Not covered in the course',
  },
  {
    headline: 'Synthetic data',
    note: 'Using AI-generated data to train or test AI systems, and the real question of whether that data is trustworthy enough to build on.',
    category: 'Not covered in the course',
  },
  {
    headline: 'Computer-use / screen-operating agents',
    note: 'Distinct from Day 5\'s multimodal or Day 12\'s tool use — an agent that directly sees and controls a screen (clicking, typing, navigating apps) rather than calling a defined tool.',
    category: 'Not covered in the course',
  },
  {
    headline: 'AI-generated code for non-engineers ("vibe coding")',
    note: 'What it means for a non-technical leader when AI can write working software from a plain-language description — and where that confidence is and isn\'t warranted.',
    category: 'Not covered in the course',
  },
  {
    headline: 'Watermarking, provenance, and deepfake detection',
    note: 'How to tell AI-generated content apart from real content, and the emerging (imperfect) standards for marking AI output as AI-generated.',
    category: 'Not covered in the course',
  },
  {
    headline: 'FinOps for AI as its own discipline',
    note: 'Day 18 covered the mechanics of AI cost (tokens, caching, right-sizing). What it didn\'t cover: the organizational practice of budgeting, forecasting, and allocating AI spend across a company the way cloud FinOps matured over the last decade.',
    category: 'Not covered in the course',
  },
  {
    headline: 'AI in specific business functions',
    note: 'The course stayed function-agnostic on purpose. A follow-on set of topics: what changes specifically for sales, legal, HR, or finance teams adopting AI, beyond the general patterns already covered.',
    category: 'Not covered in the course',
  },
];
