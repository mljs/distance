import { NumberArray } from 'cheminfo-types';

export default function topsoe(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans +=
      a[i] * Math.log((2 * a[i]) / (a[i] + b[i])) +
      b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return ans;
}
