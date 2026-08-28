export type Locale = 'en' | 'tr' | 'es';

export const locales: Locale[] = ['en', 'tr', 'es'];

export const defaultLocale: Locale = 'en';

export type Localized<T> = Record<Locale, T>;

export type Unit = 'g' | 'kg' | 'ml' | 'l' | 'tsp' | 'tbsp' | 'cup' | 'pcs' | 'pinch';

export interface Ingredient {
  /** Base amount for `servings.default`. */
  amount: number;
  unit: Unit;
  optional?: boolean;
  /** Optional subheading, e.g. "For the salad" / "For the topping". */
  group?: Localized<string>;
  /** Per-locale label, e.g. "carrots, grated". */
  name: Localized<string>;
}

export interface Step {
  text: Localized<string>;
  photo?: ImageMetadata;
}

export interface Recipe {
  /** Stable id, e.g. 'patlican-salatasi'. */
  id: string;
  /** ISO date. */
  createdAt: string;
  /** Minutes. */
  prepTime: number;
  /** Minutes. */
  totalTime: number;
  origin?: Localized<string>;
  picture?: ImageMetadata;
  servings: { default: number; min: number; max: number };
  spotifyTrackId?: string;
  ingredients: Ingredient[];
  steps: Step[];
  translations: Record<
    Locale,
    {
      slug: string;
      title: string;
      /** Card blurb on the index. */
      indexSummary: string;
      /** Longer intro on the recipe page. */
      summary: string;
    }
  >;
}
