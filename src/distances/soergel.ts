import { NumberArray } from 'cheminfo-types';

/**
 * Returns the Soergel distance between vectors a and b
 * @link [Soergel algorithm](https://www.orgchm.bas.bg/)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function soergel(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    up += Math.abs(a[i] - b[i]);
    down += Math.max(a[i], b[i]);
  }
  return up / down;
}
