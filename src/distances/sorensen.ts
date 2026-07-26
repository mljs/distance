import type { NumberArray } from 'cheminfo-types';

/**
 *Returns the Sorensen distance between vectors a and b
 * @link [Sorensen algorithm](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient)
 * @param a - first vector
 * @param b - second vector
 */
export function sorensen(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    up += Math.abs(ai - bi);
    down += ai + bi;
  }
  return up / down;
}
