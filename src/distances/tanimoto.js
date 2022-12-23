import tanimotoS from '../similarities/tanimoto';

export default function tanimoto(a, b, bitvector) {
  if (bitvector) {
    return 1 - tanimotoS(a, b, bitvector);
  } else {
    let ii = a.length;
    let p = 0;
    let q = 0;
    let m = 0;
    for (let i = 0; i < ii; i++) {
      p += a[i];
      q += b[i];
      m += Math.min(a[i], b[i]);
    }
    return (p + q - 2 * m) / (p + q - m);
  }
}
