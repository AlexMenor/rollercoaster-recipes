// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { recipes } from './src/data/recipes/index';

const site = 'https://rollercoasterrecipes.com';
const sitemapLocales = ['en', 'tr', 'es'];
const recipeAlternates = new Map(
  recipes.flatMap((recipe) => {
    const links = sitemapLocales.map((locale) => ({
      lang: locale,
      url: new URL(`/${locale}/recipes/${recipe.translations[locale].slug}`, site).href,
    }));

    return sitemapLocales.map((locale) => [
      `/${locale}/recipes/${recipe.translations[locale].slug}`,
      links,
    ]);
  }),
);

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react(),
    sitemap({
      // The bare root is a language-detect redirect, not indexable content.
      filter: (page) => page !== 'https://rollercoasterrecipes.com/',
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', tr: 'tr-TR', es: 'es-ES' },
      },
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        const links = recipeAlternates.get(path);
        return links ? { ...item, links } : item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
