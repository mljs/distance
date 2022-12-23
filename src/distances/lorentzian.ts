import { NumberArray } from 'cheminfo-types';

export default function lorentzian(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.log(Math.abs(a[i] - b[i]) + 1);
  }
  return ans;
}
