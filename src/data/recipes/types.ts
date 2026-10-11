export type Locale = 'en' | 'tr' | 'es';

export const locales: Locale[] = ['en', 'tr', 'es'];

export const defaultLocale: Locale = 'en';

export type Localized<T> = Record<Locale, T>;

export type Unit = 'g' | 'kg' | 'ml' | 'l' | 'tsp' | 'dsp' | 'tbsp' | 'cup' | 'pcs' | 'pinch';

export interface Ingredient {
  /** Base amount for `servings.default`; omit for unmeasured ingredients such as toppings. */
  amount?: number;
  /** Optional upper end of a quantity range, also for `servings.default`. */
  amountMax?: number;
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

export interface CookingInfo {
  method: 'oven' | 'airFryer';
  temperatureC: number;
  /** A doneness checkpoint is distinct from an estimated cooking duration. */
  timing:
    | { kind: 'duration'; minutes: number; maxMinutes?: number; approximate?: boolean }
    | { kind: 'check'; minutes: number };
  note?: Localized<string>;
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
  /** Optional cooking summary, independent of preparation time and servings. */
  cooking?: CookingInfo;
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
