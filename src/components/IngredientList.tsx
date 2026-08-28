import { Fragment, useState } from 'react';
import { formatAmount } from '../lib/format';
import type { Unit } from '../data/recipes/types';

export interface IngredientRow {
  amount: number;
  unit: Unit;
  optional?: boolean;
  group?: string;
  name: string;
}

interface Props {
  ingredients: IngredientRow[];
  servings: { default: number; min: number; max: number };
  labels: { heading: string; servings: string; optional: string; units: Record<Unit, string> };
}

export default function IngredientList({ ingredients, servings, labels }: Props) {
  const [count, setCount] = useState(servings.default);
  const scale = count / servings.default;

  const change = (delta: number) =>
    setCount((cur) => Math.max(servings.min, Math.min(servings.max, cur + delta)));

  let lastGroup: string | undefined;

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-elev-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="m-0 font-heading text-[26px]">{labels.heading}</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-ink/70">{labels.servings}</span>
          <button
            type="button"
            onClick={() => change(-1)}
            disabled={count <= servings.min}
            aria-label="-"
            className="grid h-9 w-9 cursor-pointer place-content-center rounded-xl border-[1.5px] border-ink text-ink hover:bg-accent-100 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <span className="min-w-[26px] text-center font-heading text-xl">{count}</span>
          <button
            type="button"
            onClick={() => change(1)}
            disabled={count >= servings.max}
            aria-label="+"
            className="grid h-9 w-9 cursor-pointer place-content-center rounded-xl border-[1.5px] border-ink text-ink hover:bg-accent-100 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>

      <ul className="m-0 mt-3 flex list-none flex-col p-0">
        {ingredients.map((ing, i) => {
          const groupHeading =
            ing.group && ing.group !== lastGroup ? (
              <li className="pt-4 pb-1 font-heading text-base text-accent-700 first:pt-2">
                {ing.group}
              </li>
            ) : null;
          lastGroup = ing.group;
          return (
            <Fragment key={i}>
              {groupHeading}
              <li className="flex items-baseline gap-3 border-b-[1.5px] border-dashed border-ink/20 py-2.5 text-[15px]">
                <span className="min-w-[58px] flex-none font-heading text-base text-accent-700">
                  {formatAmount(ing.amount * scale, ing.unit, labels.units)}
                </span>
                <span className="flex-1">{ing.name}</span>
                {ing.optional && (
                  <span className="rounded-[10px] border-[1.5px] border-accent-2-700 px-2.5 py-0.5 text-[11px] font-semibold text-accent-2-700">
                    {labels.optional}
                  </span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
