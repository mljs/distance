import { NumberArray } from 'cheminfo-types';

export default function kumarHassebrook(
  a: NumberArray,
  b: NumberArray,
): number {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (p2 + q2 - p);
}
