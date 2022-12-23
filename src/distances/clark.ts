import { NumberArray } from 'cheminfo-types';

export default function clark(a: NumberArray, b: NumberArray): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += (Math.abs(a[i] - b[i]) / (a[i] + b[i])) ** 2;
  }
  return Math.sqrt(d);
}
