import patlicanSalatasi from './patlican-salatasi';
import type { Locale, Recipe } from './types';

export const recipes: Recipe[] = [patlicanSalatasi];

export function findRecipe(locale: Locale, slug: string): Recipe | undefined {
  return recipes.find((r) => r.translations[locale].slug === slug);
}
