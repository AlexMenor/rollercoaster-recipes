import patlicanSalatasi from './patlican-salatasi';
import pastaBolognese from './pasta-bolognese';
import porridge from './porridge';
import type { Locale, Recipe } from './types';

export const recipes: Recipe[] = [patlicanSalatasi, pastaBolognese, porridge];

export function findRecipe(locale: Locale, slug: string): Recipe | undefined {
  return recipes.find((r) => r.translations[locale].slug === slug);
}
