import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Jeffreys distance between vectors a and b
 * @link [Jeffreys algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function jeffreys(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    ans += (ai - bi) * Math.log(ai / bi);
  }
  return ans;
}
