// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rollercoasterrecipes.com',
  integrations: [
    react(),
    sitemap({
      // The bare root is a language-detect redirect, not indexable content.
      filter: (page) => page !== 'https://rollercoasterrecipes.com/',
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', tr: 'tr-TR', es: 'es-ES' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
