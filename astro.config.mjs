// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://josecalderon7.github.io',
  base: 'porfolio-2025',
  integrations: [tailwind()]
});