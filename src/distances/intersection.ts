import { NumberArray } from 'cheminfo-types';

export default function intersection(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.min(a[i], b[i]);
  }
  return 1 - ans;
}
