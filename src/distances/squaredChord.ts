import { NumberArray } from 'cheminfo-types';

export default function squaredChord(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += (Math.sqrt(a[i]) - Math.sqrt(b[i])) ** 2;
  }
  return ans;
}
