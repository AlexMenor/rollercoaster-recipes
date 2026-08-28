import type { Unit } from '../data/recipes/types';

/**
 * Formats a scaled quantity: integers stay integers, common fractions become
 * ¼/⅓/½/⅔/¾, everything else rounds to one decimal.
 */
export function formatQty(n: number): string {
  const r = Math.round(n * 100) / 100;
  if (Math.abs(r - Math.round(r)) < 0.01) return String(Math.round(r));
  const whole = Math.floor(r);
  const frac = r - whole;
  const fracMap: Record<number, string> = { 0.25: '¼', 0.33: '⅓', 0.5: '½', 0.67: '⅔', 0.75: '¾' };
  let bestKey: number | null = null;
  let bestDiff = 1;
  for (const k of Object.keys(fracMap)) {
    const key = parseFloat(k);
    const d = Math.abs(frac - key);
    if (d < bestDiff) {
      bestDiff = d;
      bestKey = key;
    }
  }
  if (bestKey !== null && bestDiff < 0.08) {
    return (whole > 0 ? whole + ' ' : '') + fracMap[bestKey];
  }
  return String(Math.round(r * 10) / 10);
}

/** 'pcs'-style units are not shown after the quantity; other units use their localized label. */
export function formatAmount(amount: number, unit: Unit, unitLabels: Record<Unit, string>): string {
  const qty = formatQty(amount);
  return unit === 'pcs' ? qty : `${qty} ${unitLabels[unit]}`;
}
