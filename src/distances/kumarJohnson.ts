import { NumberArray } from 'cheminfo-types';

export default function kumarJohnson(a: NumberArray, b: NumberArray): number {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += (a[i] * a[i] - b[i] * b[i]) ** 2 / (2 * (a[i] * b[i]) ** 1.5);
  }
  return ans;
}
