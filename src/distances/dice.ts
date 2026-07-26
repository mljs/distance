import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Dice distance between vectors a and b
 * @link [Dice algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function dice(a: NumberArray, b: NumberArray): number {
  let a2 = 0;
  let b2 = 0;
  let prod2 = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    a2 += ai * ai;
    b2 += bi * bi;
    prod2 += diff * diff;
  }
  return prod2 / (a2 + b2);
}
