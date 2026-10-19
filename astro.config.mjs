import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arts-sounds-thoughts.de',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
