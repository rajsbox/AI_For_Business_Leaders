import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const days = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/days' }),
  schema: z.object({
    day: z.number().int().min(1).max(30),
    week: z.number().int().min(1).max(4),
    title: z.string(),
    // Short one-line summary shown on the homepage roadmap card.
    summary: z.string().optional(),
    // Set true once you've actually filled in the day's content.
    published: z.boolean().default(false),
    // Optional: mark hands-on days (7, 21, 30) for a badge in the UI.
    handsOn: z.boolean().default(false),
    // Estimated minutes, defaults to the course's ~45-60 min/day.
    duration: z.string().default('45–60 min'),
  }),
});

export const collections = { days };
