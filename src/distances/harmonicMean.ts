import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Harmonic mean similarity between vectors a and b
 * @link [Harmonic Mean Similarity algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function harmonicMean(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    ans += (ai * bi) / (ai + bi);
  }
  return 2 * ans;
}
