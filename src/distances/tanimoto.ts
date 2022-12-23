import { NumberArray } from 'cheminfo-types';

import tanimotoS from '../similarities/tanimoto';

export default function tanimoto(
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
      p += a[i];
      q += b[i];
      m += Math.min(a[i], b[i]);
    }
    return (p + q - 2 * m) / (p + q - m);
  }
}
