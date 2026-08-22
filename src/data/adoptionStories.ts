// Real, sourced AI adoption stories — not lesson content, not a running
// list like futureTopics.ts. Every entry here must trace to a primary
// source (the company's own engineering blog, or the AI vendor's own
// published customer story) with real, attributable numbers — never an
// invented or aggregator-sourced statistic. This is the discipline the
// course itself teaches (Day 20, Day 27): don't cite a number you can't
// trace back to where it actually came from.
//
// How to keep this current: when reviewing, re-check each source link
// still resolves and still says what's quoted here. Add a new story only
// if it comes from a primary source with real, checkable numbers — skip
// anything from a marketing aggregator or SEO round-up site, even if the
// numbers sound plausible.

export const lastReviewed = '2026-08-22';

export interface AdoptionStory {
  company: string;
  /** One line: what the company does. */
  companyDescription: string;
  /** Short headline capturing the outcome. */
  headline: string;
  /** 2-4 concrete, sourced facts/figures — quote or closely paraphrase the source. */
  facts: string[];
  sourceLabel: string;
  sourceUrl: string;
}

export const adoptionStories: AdoptionStory[] = [
  {
    company: 'GitHub',
    companyDescription: 'The code-hosting platform, working on its own Secret Protection engineering team.',
    headline: 'Onboarding 90 new security-scan types in a few weeks, up from 32 over several months',
    facts: [
      'Before: the team had validated 32 partner token types over several months of steady, manual work.',
      'After: using Copilot to parallelize the repeatable coding and release steps, engineering interns onboarded almost 90 new types in a few weeks.',
      'The team describes the shift as running many research tasks in parallel across agents, instead of one at a time.',
    ],
    sourceLabel: 'GitHub Blog — "How we accelerated Secret Protection engineering with Copilot"',
    sourceUrl: 'https://github.blog/ai-and-ml/github-copilot/how-we-accelerated-secret-protection-engineering-with-copilot/',
  },
  {
    company: 'Deepgram',
    companyDescription: 'A speech-AI company building real-time speech-to-text, text-to-speech, and voice agent APIs.',
    headline: 'An internal study found 4–10x more durable code from regular Claude users',
    facts: [
      'An internal cohort study found regular and power Claude users shipped 4–10x more durable code than non-users.',
      'One team now runs roughly 95% Claude-written code; a new hire shipped 40+ substantial pull requests in six weeks.',
      'Customer incident triage dropped from multi-day back-and-forth to minutes.',
      'Honest caveat included in their own writeup: heavy Claude use also came with a higher code-churn (replacement) rate, so the team responded by raising test-coverage standards for AI-generated code, not lowering them.',
    ],
    sourceLabel: 'Anthropic — Deepgram customer story',
    sourceUrl: 'https://claude.com/customers/deepgram',
  },
  {
    company: 'League',
    companyDescription: 'Builds consumer health experiences for health plans and providers, handling protected health information.',
    headline: 'Cut product development cycle time in half, from idea to pull request',
    facts: [
      'Product development cycle time, from idea through pull request, cut in half.',
      'AI-authored code share rose from roughly 70% to 98% over four months after rollout; adoption reached 98% of engineers, up from about 80% at company-wide launch.',
      'Vendor security reviews — a task with real compliance stakes, given the health data involved — dropped from multiple weeks to about 15 minutes, with results still signed off by a human.',
    ],
    sourceLabel: 'Anthropic — League customer story',
    sourceUrl: 'https://claude.com/customers/league',
  },
];
