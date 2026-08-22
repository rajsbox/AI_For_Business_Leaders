// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Served from GitHub Pages at https://rajsbox.github.io/AI_For_Business_Leaders/ —
  // site/base tell Astro to prefix all internal links and asset URLs correctly.
  site: 'https://rajsbox.github.io',
  base: '/AI_For_Business_Leaders',
  integrations: [mdx()]
});