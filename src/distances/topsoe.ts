import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Topsoe distance between vectors a and b
 * @link [Topsoe algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function topsoe(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const sum = ai + bi;
    ans += ai * Math.log((2 * ai) / sum) + bi * Math.log((2 * bi) / sum);
  }
  return ans;
}
