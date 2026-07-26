import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the squared distance between vectors a and b
 * @link [Squared algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function squared(a: NumberArray, b: NumberArray): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    d += (diff * diff) / (ai + bi);
  }
  return d;
}
