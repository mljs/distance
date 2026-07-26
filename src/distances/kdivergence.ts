import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the K divergence distance between vectors a and b
 * @link [K divergence algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function kdivergence(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    ans += ai * Math.log((2 * ai) / (ai + b[i]));
  }
  return ans;
}
