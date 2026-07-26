import type { NumberArray } from 'cheminfo-types';

import { tanimoto as tanimotoS } from '../similarities/tanimoto.ts';
/**
 *Returns the Tanimoto distance between vectors p and q, and accepts the bitVector use, see the test case for an example
 * @link [Tanimoto algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 * @param bitvector - bitVector
 */
export function tanimoto(
  a: NumberArray,
  b: NumberArray,
  bitvector?: boolean,
): number {
  if (bitvector) {
    return 1 - tanimotoS(a, b, bitvector);
  } else {
    let p = 0;
    let q = 0;
    let m = 0;
    for (let i = 0; i < a.length; i++) {
      const ai = a[i];
      const bi = b[i];
      p += ai;
      q += bi;
      m += Math.min(ai, bi);
    }
    return (p + q - 2 * m) / (p + q - m);
  }
}
