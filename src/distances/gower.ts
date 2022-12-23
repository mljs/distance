import { NumberArray } from 'cheminfo-types';

export default function gower(a: NumberArray, b: NumberArray): number {
  const ii = a.length;
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += Math.abs(a[i] - b[i]);
  }
  return ans / ii;
}
