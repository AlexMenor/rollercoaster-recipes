---
name: recipe-workflow
description: "Add or revise recipes in Rollercoaster Recipes, including localized content, a consistent illustration, song reminder, SEO checks, and build validation."
---

# Recipe Workflow

Use this skill for recipe additions or recipe-content/image updates in the Rollercoaster Recipes project. It applies to a complete new recipe and to a change that affects ingredients, steps, translations, recipe imagery, or recipe metadata.

## Before editing

- Read the repository `AGENTS.md` and inspect `src/data/recipes/types.ts`, `src/data/recipes/index.ts`, and a comparable recipe record before choosing the shape of the change.
- Treat a recipe as one shared record with English, Turkish, and Spanish translations. Keep all three semantically equivalent when the title, summaries, ingredients, steps, optional details, or garnish changes.
- Preserve user-authored, unrelated working-tree changes. Do not commit, push, or publish unless requested.

## Recipe record

- Create one `src/data/recipes/<recipe-id>.ts` record, import its one source image from `src/assets/`, and register it in `src/data/recipes/index.ts`.
- Use the `Recipe` type exactly: practical times in minutes, a scalable `servings` range, supported units, optional ingredients marked with `optional: true`, and localized names for every ingredient and step.
- Supply a non-empty, unique, culturally natural slug for each of `en`, `tr`, and `es`. Keep all translations in the same record so routes, language switching, and sitemap alternates remain connected.
- Write an index summary and a longer recipe-page summary for every locale. Keep the content faithful to the user's stated recipe, and do not invent mandatory ingredients or steps.

## Spotify checkpoint

Before declaring any recipe addition complete, explicitly remind the user that the recipe needs a Spotify song and ask for the track if no `spotifyTrackId` has been provided. Do this even when the recipe is otherwise finished. If the user gives a Spotify track ID, store it on the shared recipe record and confirm it renders.

## Recipe image

- Keep exactly one source image per recipe in `src/assets/`, referenced only by the record's `picture` field. Do not create separate card, detail, or social source assets.
- Follow the project visual language: square, strict orthographic overhead food illustration viewed directly from above, with the camera perpendicular to the food and plate at 90 degrees. This is non-negotiable: do not accept or save an illustration with an angled, three-quarter, side, tilted, or perspective-distorted view. Circular plates must remain circular, never elliptical. Center the bowl or plate at a consistent scale, with its outer edge around 84% of the canvas and roughly 8% clear warm-cream margin on every side. Match the gallery's canonical 1254 x 1254 PNG source canvas; at that size, target an outer dish bounding box of about 1054 x 1054 at x=100, y=100. Use handmade gouache-and-crayon texture with visible paper grain, bright appetizing food, no text, logos, or photorealism.
- Choose the ceramic color for the specific food rather than defaulting to navy. Use a color that complements or gives appetizing contrast to the dominant food colors, and carry that palette into the sparse decorative brush marks. Review the existing recipe gallery before choosing so recipes remain clearly varied without losing the shared style. State the chosen ceramic and accent colors explicitly in the image prompt.
- Do not trust requested percentages in an image-generation prompt as proof of framing. After generation, measure the selected image's actual outer dish bounding box and verify that its horizontal and vertical diameters are nearly equal, its center matches the canvas center, and its margins match the canonical geometry within a few pixels. If the generated result is otherwise approved but misses this geometry, apply a deterministic scale-and-center normalization to the raster, preserving the food, palette, square canvas, RGB output, and lack of alpha, then inspect the normalized result again.
- Review multiple recipe images together in a contact sheet or on the real recipe index at card size before saving them. Isolated images can look correct while their relative margins remain inconsistent. Reject or correct any image whose dish reads noticeably larger, smaller, off-center, or elliptical next to the rest of the gallery.
- Use Astro image optimization for every display size. Do not pass raw source URLs into client components. The detail image and its social/structured-data image must derive from the same `picture` asset, including a high-quality responsive `srcset` with a 2x option.
- For image changes, inspect the source first, preserve all elements and composition unless the user asks otherwise, and inspect the generated result before replacing the source. Check that the overhead-view rule is met before saving. Make targeted edits specific, for example: preserve overhead perspective, keep an existing sauce smooth if there are no meatballs or tomato pieces, remove garnish fully rather than leaving a gap, and distribute replacement seeds naturally.
- Use the available image-generation workflow for raster illustration changes. Save the selected result into `src/assets/` only after visual approval. Report its workspace path, concise final prompt, and whether built-in or fallback mode was used.

## Validation and handoff

- Run `npm run build` and `git diff --check` after a recipe or image change.
- For a newly added recipe, inspect `dist/sitemap-0.xml` and verify the English, Turkish, and Spanish URLs appear together as alternates. Preserve correct per-recipe `hreflang` behavior and English `x-default`.
- Give the user a concise result summary with relevant source file links and the validation outcome. Mention the Spotify checkpoint if it still needs their input.
