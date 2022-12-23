import { NumberArray } from 'cheminfo-types';

export default function matusita(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return Math.sqrt(2 - 2 * ans);
}
