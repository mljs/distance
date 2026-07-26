import type { NumberArray } from 'cheminfo-types';

/**
 * Returns the Soergel distance between vectors a and b
 * @link [Soergel algorithm](https://www.orgchm.bas.bg/)
 * @param a - first vector
 * @param b - second vector
 */
export function soergel(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    up += Math.abs(ai - bi);
    down += Math.max(ai, bi);
  }
  return up / down;
}
