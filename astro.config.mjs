// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hannahaj.github.io',
  base: '/sasiedzi-website',
  integrations: [sitemap()],
});
