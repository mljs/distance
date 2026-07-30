import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Kumar-Johnson distance between vectors a and b
 * @link [Kumar-Johnson algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function kumarJohnson(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const numerator = a[i] * a[i] - b[i] * b[i];
    // `prod * Math.sqrt(prod)` is ~6x faster than `prod ** 1.5`, which no
    // engine specializes; it costs at most 1 ulp of accuracy
    const prod = a[i] * b[i];
    ans += (numerator * numerator) / (2 * prod * Math.sqrt(prod));
  }
  return ans;
}
