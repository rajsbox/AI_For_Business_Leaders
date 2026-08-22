// Shared "model landscape" reference shown on every day page (sidebar panel).
// Edit this file directly to keep it current — it's the single source of truth,
// so updates here appear on all 30 day pages automatically.
//
// Notes on filling this in:
// - `parameters`: frontier closed-weight labs (Anthropic, OpenAI, Google) do not
//   disclose parameter counts — leave as "Undisclosed" rather than guessing.
//   Open-weight models (Llama, Mistral, DeepSeek, etc.) do publish real numbers.
// - `contextWindow` / `pricing`: verify against the vendor's own docs before
//   publishing — third-party articles are frequently wrong or out of date.
// - `lastVerified`: bump this whenever you check/update a row, so readers (and
//   you) know how fresh the table is.

export interface ModelEntry {
  vendor: string;
  model: string;
  parameters: string;
  contextWindow: string;
  offeredVia: string;
  notes?: string;
}

export const modelsLastUpdated = '2026-08-22'; // update whenever this file changes

export const frontierModels: ModelEntry[] = [
  {
    vendor: 'Anthropic',
    model: 'Claude Opus 5 / Sonnet 5',
    parameters: 'Undisclosed',
    contextWindow: 'TBD — verify at anthropic.com',
    offeredVia: 'Claude.ai, Claude API, AWS Bedrock, Google Vertex AI',
  },
  {
    vendor: 'OpenAI',
    model: 'GPT-5.x',
    parameters: 'Undisclosed',
    contextWindow: 'TBD — verify at openai.com',
    offeredVia: 'ChatGPT, OpenAI API, Microsoft Azure OpenAI',
  },
  {
    vendor: 'Google DeepMind',
    model: 'Gemini 3',
    parameters: 'Undisclosed',
    contextWindow: 'TBD — verify at ai.google.dev',
    offeredVia: 'Gemini app, Google AI Studio, Vertex AI',
  },
];

export const openWeightModels: ModelEntry[] = [
  {
    vendor: 'Meta',
    model: 'Llama (latest)',
    parameters: 'Published — verify current flagship size',
    contextWindow: 'TBD — verify at llama.com',
    offeredVia: 'Self-hosted, Hugging Face, most major clouds',
  },
  {
    vendor: 'Mistral AI',
    model: 'Mistral (latest large)',
    parameters: 'Published — verify current flagship size',
    contextWindow: 'TBD — verify at mistral.ai',
    offeredVia: 'Self-hosted, Mistral API, most major clouds',
  },
  {
    vendor: 'DeepSeek',
    model: 'DeepSeek (latest)',
    parameters: 'Published — verify current flagship size',
    contextWindow: 'TBD — verify at deepseek.com',
    offeredVia: 'Self-hosted, DeepSeek API, most major clouds',
  },
];
