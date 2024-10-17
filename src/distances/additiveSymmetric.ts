import { NumberArray } from 'cheminfo-types';
/**
 *Returns the Additive Symmetric distance between vectors a and b
 * @link [Additive Symmetric algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export default function additiveSymmetric(
  a: NumberArray,
  b: NumberArray,
): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i]) * (a[i] + b[i])) / (a[i] * b[i]);
  }
  return d;
}
