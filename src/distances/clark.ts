import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Clark distance between vectors a and b
 * @link [Clark algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function clark(a: NumberArray, b: NumberArray): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const ratio = (ai - bi) / (ai + bi);
    d += ratio * ratio;
  }
  return Math.sqrt(d);
}
