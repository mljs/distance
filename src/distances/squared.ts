import { NumberArray } from 'cheminfo-types';
/**
 *Returns the squared distance between vectors a and b
 * @link [Squared algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function squared(a: NumberArray, b: NumberArray): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / (a[i] + b[i]);
  }
  return d;
}
