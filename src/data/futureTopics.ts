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

export const lastReviewed = '2026-08-29';

export interface FutureTopic {
  headline: string;
  note: string;
  /** Rough category for grouping — keep short, matches the site's existing week/topic tone. */
  category: 'Not covered in the course' | 'New since Day 30 was written' | 'Woven into the course';
}

export const futureTopics: FutureTopic[] = [
  {
    headline: 'World models as a distinct AI paradigm beyond LLMs',
    note: "Real money and top researchers (Yann LeCun's AMI Labs, Google DeepMind's Genie 3, Waymo's simulation use) are now betting on systems that learn the physical world from sensory data, not text prediction — a different cost and capability profile than the chatbot/RAG/agent stack this course teaches.",
    category: 'Not covered in the course',
  },
  {
    headline: 'Agentic commerce: agents that can actually pay',
    note: "Google's Agent Payments Protocol (AP2) and OpenAI/Stripe's competing Agentic Commerce Protocol (ACP) now let AI agents make authorized purchases via cryptographically signed permissions — a new governance question (who authorized this, and how is it proven?) beyond the tool-calling this course already covers.",
    category: 'Not covered in the course',
  },
  {
    headline: 'Agent protocol governance went neutral',
    note: "The Linux Foundation's Agentic AI Foundation now governs both MCP and A2A jointly (with AWS, Anthropic, Google, Microsoft, and OpenAI as members), moving the connectivity standards this course teaches from single-vendor projects to shared, neutral governance.",
    category: 'Not covered in the course',
  },
  {
    headline: "NIST's AI Agent Standards Initiative",
    note: "A formal U.S. government effort (launched Feb 2026) aimed at agent interoperability, security, and identity standards — the first dedicated federal answer to the \"how do we govern agents acting on our behalf\" question this course raises but doesn't yet name.",
    category: 'Not covered in the course',
  },
  {
    headline: "The EU AI Act's transparency rules are already live",
    note: 'A "Digital Omnibus" delayed the high-risk system deadline to Dec 2027, but the transparency obligations — disclosing AI-generated content, labeling deepfakes, disclosing chatbot use — took effect on schedule in August 2026, ahead of what this course currently reflects.',
    category: 'Not covered in the course',
  },
  {
    headline: 'US federal push to preempt state AI laws',
    note: "An executive order, a federal Litigation Task Force, and a White House policy framework are actively trying to replace the state-by-state US AI regulatory patchwork with a single federal standard — still unresolved, but a real compliance-planning uncertainty this course's EU-centric regulation coverage doesn't mention.",
    category: 'Not covered in the course',
  },
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
