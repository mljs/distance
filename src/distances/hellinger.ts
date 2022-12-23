import { NumberArray } from 'cheminfo-types';

export default function hellinger(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return 2 * Math.sqrt(1 - ans);
}
