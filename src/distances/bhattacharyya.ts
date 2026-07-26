import type { NumberArray } from 'cheminfo-types';

/**
 *Returns the Bhattacharyya distance between vectors a and b
 * @link [Bhattacharyya algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function bhattacharyya(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return -Math.log(ans);
}
