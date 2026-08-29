import type { Locale, Unit } from './recipes/types';

export interface UiStrings {
  language: string;
  recipes: string;
  tagline: string;
  searchPlaceholder: string;
  servings: string;
  ingredients: string;
  steps: string;
  prep: string;
  total: string;
  serves: string;
  back: string;
  optional: string;
  noResults: string;
  minutes: string;
  songLabel: string;
  stepPhoto: string;
  photoPlaceholder: string;
  /** Display labels for measurement units (pcs is never shown). */
  units: Record<Unit, string>;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    language: 'Language',
    recipes: 'Recipes',
    tagline:
      'Recipes with ups, downs, and a soundtrack. Every dish comes with its own song. Press play and cook along.',
    searchPlaceholder: 'Search recipes…',
    servings: 'Servings',
    ingredients: 'Ingredients',
    steps: 'Steps',
    prep: 'Prep',
    total: 'Total',
    serves: 'Serves',
    back: 'All recipes',
    optional: 'optional',
    noResults: 'No recipes match your search.',
    minutes: 'min',
    songLabel: "This recipe's song",
    stepPhoto: 'Step photo',
    photoPlaceholder: 'Photo coming soon',
    units: {
      g: 'g',
      kg: 'kg',
      ml: 'ml',
      l: 'l',
      tsp: 'tsp',
      tbsp: 'tbsp',
      cup: 'cup',
      pcs: '',
      pinch: 'pinch',
    },
  },
  tr: {
    language: 'Dil',
    recipes: 'Tarifler',
    tagline:
      'İnişli çıkışlı, müzikli tarifler. Her yemeğin kendi şarkısı var. Çal ve pişirmeye başla.',
    searchPlaceholder: 'Tarif ara…',
    servings: 'Porsiyon',
    ingredients: 'Malzemeler',
    steps: 'Adımlar',
    prep: 'Hazırlık',
    total: 'Toplam',
    serves: 'Porsiyon',
    back: 'Tüm tarifler',
    optional: 'isteğe bağlı',
    noResults: 'Aramanızla eşleşen tarif yok.',
    minutes: 'dk',
    songLabel: 'Bu tarifin şarkısı',
    stepPhoto: 'Adım fotoğrafı',
    photoPlaceholder: 'Fotoğraf yakında',
    units: {
      g: 'g',
      kg: 'kg',
      ml: 'ml',
      l: 'l',
      tsp: 'çay kaşığı',
      tbsp: 'yemek kaşığı',
      cup: 'su bardağı',
      pcs: '',
      pinch: 'tutam',
    },
  },
  es: {
    language: 'Idioma',
    recipes: 'Recetas',
    tagline:
      'Recetas con subidas, bajadas y banda sonora. Cada plato tiene su propia canción. Dale al play y cocina.',
    searchPlaceholder: 'Buscar recetas…',
    servings: 'Raciones',
    ingredients: 'Ingredientes',
    steps: 'Pasos',
    prep: 'Preparación',
    total: 'Total',
    serves: 'Para',
    back: 'Todas las recetas',
    optional: 'opcional',
    noResults: 'Ninguna receta coincide con tu búsqueda.',
    minutes: 'min',
    songLabel: 'La canción de esta receta',
    stepPhoto: 'Foto del paso',
    photoPlaceholder: 'Foto próximamente',
    units: {
      g: 'g',
      kg: 'kg',
      ml: 'ml',
      l: 'l',
      tsp: 'cdta',
      tbsp: 'cda',
      cup: 'taza',
      pcs: '',
      pinch: 'pizca',
    },
  },
};
