import type { NumberArray } from 'cheminfo-types';
/**
 *Returns Kumar-Hassebrook similarity between vectors a and b
 * @link [Kumar-Hassebrook Similarity algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function kumarHassebrook(a: NumberArray, b: NumberArray): number {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    p += ai * bi;
    p2 += ai * ai;
    q2 += bi * bi;
  }
  return p / (p2 + q2 - p);
}
