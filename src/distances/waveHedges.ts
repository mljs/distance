import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Wave Hedges distance between vectors a and b
 * @link [Wave Hedges algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function waveHedges(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    ans += 1 - Math.min(ai, bi) / Math.max(ai, bi);
  }
  return ans;
}
