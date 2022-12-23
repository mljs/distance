import { NumberArray } from 'cheminfo-types';

export default function dice(a: NumberArray, b: NumberArray): number {
  let a2 = 0;
  let b2 = 0;
  let prod2 = 0;
  for (let i = 0; i < a.length; i++) {
    a2 += a[i] * a[i];
    b2 += b[i] * b[i];
    prod2 += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return prod2 / (a2 + b2);
}
