import type { NumberArray } from 'cheminfo-types';
/**
 * Returns the Minkowski distance between vectors a and b for order p
 * @link [Minkowski algorithm](https://en.wikipedia.org/wiki/Minkowski_distance)
 * @param a - first vector
 * @param b - second vector
 * @param p - number of order
 */
export function minkowski(a: NumberArray, b: NumberArray, p: number) {
  let d = 0;
  // `x ** p` is far slower than the equivalent multiplication: ~9x for p = 1
  // and ~1.5x for p = 2, the two orders that are used in practice.
  if (p === 1) {
    for (let i = 0; i < a.length; i++) {
      d += Math.abs(a[i] - b[i]);
    }
    return d;
  }
  if (p === 2) {
    for (let i = 0; i < a.length; i++) {
      const diff = a[i] - b[i];
      d += diff * diff;
    }
    return Math.sqrt(d);
  }
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
