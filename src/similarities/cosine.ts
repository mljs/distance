import { NumberArray } from 'cheminfo-types';
/**
 * Returns the average of cosine distances between vectors a and b
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function cosine(a: NumberArray, b: NumberArray): number {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
