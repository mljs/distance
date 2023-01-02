import { NumberArray } from 'cheminfo-types';
/**
 *Returns the Jeffreys distance between vectors a and b
 * @link [Jeffreys algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function jeffreys(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += (a[i] - b[i]) * Math.log(a[i] / b[i]);
  }
  return ans;
}
