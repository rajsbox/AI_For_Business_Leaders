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
  category: 'Not covered in the course' | 'New since Day 30 was written' | 'Woven into the course';
}

export const futureTopics: FutureTopic[] = [
  {
    headline: 'Fine-tuning, on its own terms',
    note: 'Added as a short callout in Day 11 covering how fine-tuning actually works and its ongoing cost — still not a full lesson on building one.',
    category: 'Woven into the course',
  },
  {
    headline: 'Synthetic data',
    note: 'Added as a short callout in Day 24, on using AI-generated data to fill gaps in real data — and why it inherits the same trust questions as any other source.',
    category: 'Woven into the course',
  },
  {
    headline: 'Computer-use / screen-operating agents',
    note: 'Added as a short callout in Day 12, distinguishing this from named-tool function calling and flagging the extra governance question it raises.',
    category: 'Woven into the course',
  },
  {
    headline: 'AI-generated code for non-engineers ("vibe coding")',
    note: 'Added as a short callout in Day 23, inside the "build custom" option — a real speed boost for building, not a reason to skip the review/maintenance questions.',
    category: 'Woven into the course',
  },
  {
    headline: 'Watermarking, provenance, and deepfake detection',
    note: 'Added as a short callout in Day 5, flagged honestly as an unsolved, still-evolving problem rather than something a vendor has already handled.',
    category: 'Woven into the course',
  },
  {
    headline: 'FinOps for AI as its own discipline',
    note: 'Added as a short callout in Day 18, on the organizational-budgeting layer above the individual cost levers the day already covered.',
    category: 'Woven into the course',
  },
  {
    headline: 'AI in specific business functions',
    note: 'Added as a short callout in Day 29, naming that a real use-case portfolio tends to cluster by function even though the course taught general patterns.',
    category: 'Woven into the course',
  },
];
