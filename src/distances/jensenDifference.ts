import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Jensen difference distance between vectors a and b
 * @link [Jensen difference algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function jensenDifference(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const half = (ai + bi) / 2;
    ans += (ai * Math.log(ai) + bi * Math.log(bi)) / 2 - half * Math.log(half);
  }
  return ans;
}
