import bakedSweetPotatoes from './baked-sweet-potatoes';
import carrotCake from './carrot-cake';
import orangeCake from './orange-cake';
import patlicanSalatasi from './patlican-salatasi';
import pastaBolognese from './pasta-bolognese';
import porridge from './porridge';
import spanishPotatoOmelette from './spanish-potato-omelette';
import type { Locale, Recipe } from './types';

export const recipes: Recipe[] = [bakedSweetPotatoes, carrotCake, orangeCake, patlicanSalatasi, pastaBolognese, porridge, spanishPotatoOmelette];

export function findRecipe(locale: Locale, slug: string): Recipe | undefined {
  return recipes.find((r) => r.translations[locale].slug === slug);
}
