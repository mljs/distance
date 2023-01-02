import { NumberArray } from 'cheminfo-types';
/**
 * Returns the Minkowski distance between vectors a and b for order p
 * @link [Minkowski algorithm](https://en.wikipedia.org/wiki/Minkowski_distance)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @param {number} p - number of order
 * @returns {number}
 */
export default function minkowski(a: NumberArray, b: NumberArray, p: number) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
