import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Taneja distance between vectors a and b
 * @link [Taneja algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function taneja(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const sum = ai + bi;
    ans += (sum / 2) * Math.log(sum / (2 * Math.sqrt(ai * bi)));
  }
  return ans;
}
