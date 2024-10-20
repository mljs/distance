import { NumberArray } from 'cheminfo-types';
/**
 *Returns the Motyka distance between vectors a and b
 * @link [Motyka algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function motyka(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    up += Math.min(a[i], b[i]);
    down += a[i] + b[i];
  }
  return 1 - up / down;
}
