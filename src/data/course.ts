// Single source of truth for the course structure (weeks + day titles),
// mirroring 30-Day-AI-Fluency-Course.md. Used to drive navigation and
// to scaffold day content files.

export interface WeekMeta {
  week: number;
  title: string;
}

export const weeks: WeekMeta[] = [
  { week: 1, title: 'Modern AI Foundations & Jargon Decoder' },
  { week: 2, title: "Building AI Applications (The Builder's Vocabulary)" },
  { week: 3, title: 'From Prototype to Production (Where Most Projects Die)' },
  { week: 4, title: 'Enterprise Adoption & AI Strategy' },
];

export interface DayMeta {
  day: number;
  week: number;
  title: string;
  handsOn?: boolean;
}

export const days: DayMeta[] = [
  // Week 1
  { day: 1, week: 1, title: 'How LLMs Actually Work — Tokens, Parameters, Training vs Inference' },
  { day: 2, week: 1, title: "The Jargon Map — GenAI vs Agentic AI vs Traditional ML vs Deep Learning" },
  { day: 3, week: 1, title: 'Context Windows, Prompts, and Why "Prompt Engineering" Became "Context Engineering"' },
  { day: 4, week: 1, title: 'The Model Landscape 2026 — Frontier Models, Open-Weight Models, and How to Compare Them' },
  { day: 5, week: 1, title: "Multimodal AI — Text, Vision, Voice, Video: What's Production-Ready vs Demo-Ware" },
  { day: 6, week: 1, title: 'Reasoning Models & Test-Time Compute — Why "Thinking" Models Changed the Economics' },
  { day: 7, week: 1, title: 'Weekly Review + Hands-On — Use 2–3 Frontier Chatbots on Real Work Tasks', handsOn: true },
  // Week 2
  { day: 8, week: 2, title: 'APIs, System Prompts, and Temperature — The Anatomy of an AI-Powered Application' },
  { day: 9, week: 2, title: "RAG (Retrieval-Augmented Generation) — Why It's the #1 Enterprise Pattern" },
  { day: 10, week: 2, title: 'Embeddings & Vector Databases — How Machines "Search by Meaning"' },
  { day: 11, week: 2, title: 'Prompting vs RAG vs Fine-Tuning — The Decision Framework Every Leader Should Know' },
  { day: 12, week: 2, title: 'Tool Use / Function Calling — How LLMs Take Actions, Not Just Generate Text' },
  { day: 13, week: 2, title: 'MCP (Model Context Protocol) & A2A — The New Connectivity Standards for AI Systems' },
  { day: 14, week: 2, title: 'AI Agents & Orchestration — Single Agents, Multi-Agent Systems, and Frameworks' },
  // Week 3
  { day: 15, week: 3, title: 'Evals — How You Actually Measure Whether an AI System Works' },
  { day: 16, week: 3, title: 'Hallucinations, Grounding & Guardrails — Managing the Reliability Problem' },
  { day: 17, week: 3, title: 'AI Security — Prompt Injection, Data Leakage, and the OWASP Top 10 for LLMs' },
  { day: 18, week: 3, title: 'Tokenomics — Understanding AI Costs, Pricing Models, Caching, and Model Right-Sizing' },
  { day: 19, week: 3, title: 'Observability & LLMOps — Monitoring, Tracing, and Versioning AI in Production' },
  { day: 20, week: 3, title: 'The 79%-Adopted-but-11%-in-Production Gap — Why Pilots Fail' },
  { day: 21, week: 3, title: 'Weekly Review + Hands-On — Build a Simple No-Code/Low-Code AI Workflow', handsOn: true },
  // Week 4
  { day: 22, week: 4, title: 'Use-Case Discovery — Identifying High-Volume, Well-Defined Workflows Where AI Wins First' },
  { day: 23, week: 4, title: 'Build vs Buy vs Partner — Platforms, Copilots, Vertical AI Vendors, and Custom Builds' },
  { day: 24, week: 4, title: 'Data Readiness — Why Your Data Estate Decides Your AI Ceiling' },
  { day: 25, week: 4, title: 'AI Governance & Regulation — EU AI Act, Responsible AI, Audit Trails, Human-in-the-Loop' },
  { day: 26, week: 4, title: 'Sovereign AI, Edge AI & AI Factories — The 2026 Infrastructure Trends' },
  { day: 27, week: 4, title: 'Measuring ROI — From Productivity Claims to Real P&L Impact' },
  { day: 28, week: 4, title: 'Change Management & Workforce — Reskilling, AI-Augmented Roles, and Org Design' },
  { day: 29, week: 4, title: 'Writing an AI Strategy — Vision, Use-Case Portfolio, Operating Model, Risk Posture' },
  { day: 30, week: 4, title: 'Capstone — Draft a 1-Page AI Adoption Plan and Pressure-Test It with an AI Assistant', handsOn: true },
];

export function weekTitle(week: number): string {
  return weeks.find((w) => w.week === week)?.title ?? `Week ${week}`;
}
