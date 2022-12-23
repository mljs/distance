import { NumberArray } from 'cheminfo-types';

export default function jensenShannon(a: NumberArray, b: NumberArray): number {
  let p = 0;
  let q = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * Math.log((2 * a[i]) / (a[i] + b[i]));
    q += b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return (p + q) / 2;
}
