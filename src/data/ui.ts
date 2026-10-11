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
  cooking: string;
  oven: string;
  airFryer: string;
  temperature: string;
  cookingDuration: string;
  firstCheck: string;
  checkCookingAfter: string;
  approximately: string;
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
    cooking: 'Cooking',
    oven: 'Oven',
    airFryer: 'Air fryer',
    temperature: 'Temperature',
    cookingDuration: 'Cooking time',
    firstCheck: 'First check',
    checkCookingAfter: 'Check after {time}',
    approximately: 'About',
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
      dsp: 'dessertspoon',
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
    cooking: 'Pişirme',
    oven: 'Fırın',
    airFryer: 'Hava fritözü',
    temperature: 'Sıcaklık',
    cookingDuration: 'Pişirme süresi',
    firstCheck: 'İlk kontrol',
    checkCookingAfter: '{time} sonra kontrol edin',
    approximately: 'Yaklaşık',
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
      dsp: 'tatlı kaşığı',
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
    cooking: 'Cocción',
    oven: 'Horno',
    airFryer: 'Freidora de aire',
    temperature: 'Temperatura',
    cookingDuration: 'Tiempo de cocción',
    firstCheck: 'Primera comprobación',
    checkCookingAfter: 'Comprobar a los {time}',
    approximately: 'Aprox.',
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
      dsp: 'cuchara de postre',
      tbsp: 'cda',
      cup: 'taza',
      pcs: '',
      pinch: 'pizca',
    },
  },
};
