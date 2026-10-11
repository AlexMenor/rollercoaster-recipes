import bakedSweetPotatoes from './baked-sweet-potatoes';
import berenjenasConTomate from './berenjenas-con-tomate';
import caldoValiente from './caldo-valiente';
import carrotCake from './carrot-cake';
import fluffyPancakes from './fluffy-pancakes';
import orangeCake from './orange-cake';
import patlicanSalatasi from './patlican-salatasi';
import pastaBolognese from './pasta-bolognese';
import polloYVerdurasAlinadas from './pollo-y-verduras-alinadas';
import porridge from './porridge';
import spanishPotatoOmelette from './spanish-potato-omelette';
import turkishPilav from './turkish-pilav';
import type { Locale, Recipe } from './types';

export const recipes: Recipe[] = [bakedSweetPotatoes, berenjenasConTomate, caldoValiente, carrotCake, fluffyPancakes, orangeCake, patlicanSalatasi, pastaBolognese, polloYVerdurasAlinadas, porridge, spanishPotatoOmelette, turkishPilav];

export function findRecipe(locale: Locale, slug: string): Recipe | undefined {
  return recipes.find((r) => r.translations[locale].slug === slug);
}
