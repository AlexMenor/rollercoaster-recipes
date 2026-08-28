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
- When generating or editing a food illustration, preserve the existing composition unless the request says otherwise. Inspect the generated result before replacing the shared source asset.
- Keep recipe thumbnails stylistically consistent: square, slightly top-down food illustrations in a handmade gouache-and-crayon style, with visible paper grain, warm cream backgrounds, a navy ceramic bowl or plate, and sparse navy and golden brush marks. Use bright, appetizing colors, no text, no logos, and no photorealism.

## Recipe localization

- When changing a recipe's ingredients, steps, title, summaries, or garnish details, update the English, Turkish, and Spanish versions together so their content remains equivalent.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
