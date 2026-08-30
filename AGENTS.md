## Recipe workflow

For recipe additions or recipe-content/image updates, use the repository skill at [`.agents/skills/recipe-workflow/SKILL.md`](.agents/skills/recipe-workflow/SKILL.md).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Writing

Do not use em dashes or en dashes. Use commas, parentheses, colons, or regular hyphens instead.

## Recipe images

- Keep one source image per recipe in `src/assets/`, referenced only through the recipe's `picture` field. Do not create separate list and detail image assets.
- Use Astro's `Image` or `getImage` to produce display-specific sizes and formats at build time. Client components should receive the optimized `getImage` URL, not the source asset URL.
- Recipe-detail images must use a responsive `srcset` with a 2x-size option for Retina screens and high image quality.
- Recipe-detail pages derive their 1200 × 630 social image from the same `picture` asset. Use that optimized image for Open Graph, Twitter, and Recipe JSON-LD, never a separate social source image.
- When generating or editing a food illustration, preserve the existing composition unless the request says otherwise. Inspect the generated result before replacing the shared source asset.
- Keep recipe thumbnails stylistically consistent: square, strict orthographic overhead food illustrations in a handmade gouache-and-crayon style, with visible paper grain and warm cream backgrounds. Center the circular bowl or plate at a consistent scale, with its outer edge around 84% of the canvas and roughly 8% clear margin on every side. Choose a different ceramic color for each recipe that complements or contrasts well with the food, and carry that palette into the sparse decorative brush marks. Review the existing recipe gallery before choosing a color so the collection does not default to navy or become visually repetitive. Use bright, appetizing colors, no text, no logos, and no photorealism.

## Recipe localization

- When changing a recipe's ingredients, steps, title, summaries, or garnish details, update the English, Turkish, and Spanish versions together so their content remains equivalent.

## Localized recipe URLs and SEO

- Every recipe must include a unique, non-empty `slug` for English, Turkish, and Spanish. Keep the three translations in one recipe record so route generation, language switching, and sitemap alternates stay connected.
- Recipe pages receive their `hreflang` links from the `slugs` prop. Keep passing the per-locale slug map to `Layout`; do not replace it with a link to a locale index.
- `x-default` must point to the matching English version of the current content. For a recipe page, it must be that recipe's English URL, never `/en`.
- The sitemap's recipe alternates are derived from `src/data/recipes`. Adding a recipe requires no manual sitemap entry, but always run `npm run build` and verify its English, Turkish, and Spanish URLs appear together in `dist/sitemap-0.xml`.
- If adding a locale or changing the recipe URL format, update the locale definitions, language switcher, `Layout`, and the recipe alternate mapping in `astro.config.mjs` together.

## Language preference

- An explicit language choice is stored in the first-party `rr_locale` cookie for one year. Preserve this behavior when changing the language switcher.
- `netlify/edge-functions/preferred-locale.js` redirects `/` from that cookie before the `Accept-Language` fallback redirects in `netlify.toml`. Keep the Edge Function and fallback redirects together, in that order.
- `src/pages/index.astro` is the non-Netlify and local-development fallback. It must read `rr_locale` first, then use the browser language.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
