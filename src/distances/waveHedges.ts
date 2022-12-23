import { NumberArray } from 'cheminfo-types';

export default function waveHedges(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += 1 - Math.min(a[i], b[i]) / Math.max(a[i], b[i]);
  }
  return ans;
}
