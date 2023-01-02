import { NumberArray } from 'cheminfo-types';
/**
 *Returns the Hellinger distance between vectors a and b
 * @link [Hellinger algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function hellinger(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return 2 * Math.sqrt(1 - ans);
}
