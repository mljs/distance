import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Jensen-Shannon distance between vectors a and b
 * @link [Jensen-Shannon algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function jensenShannon(a: NumberArray, b: NumberArray): number {
  let p = 0;
  let q = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const sum = ai + bi;
    p += ai * Math.log((2 * ai) / sum);
    q += bi * Math.log((2 * bi) / sum);
  }
  return (p + q) / 2;
}
