import type { NumberArray } from 'cheminfo-types';
/**
 * Returns the cosine similarity between vectors a and b
 * @param a - first vector
 * @param b - second vector
 */
export function cosine(a: NumberArray, b: NumberArray): number {
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
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
