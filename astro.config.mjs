// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sasiedzi-www.github.io',
  base: '/sasiedzi-website',
  integrations: [sitemap()],
});
