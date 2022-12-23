import { NumberArray } from 'cheminfo-types';

export default function neyman(a: NumberArray, b: NumberArray): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / a[i];
  }
  return d;
}
