import { NumberArray } from 'cheminfo-types';
/**
 *Returns the Topsoe distance between vectors a and b
 * @link [Topsoe algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function topsoe(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans +=
      a[i] * Math.log((2 * a[i]) / (a[i] + b[i])) +
      b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return ans;
}
