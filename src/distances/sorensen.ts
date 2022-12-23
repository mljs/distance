import { NumberArray } from 'cheminfo-types';

export default function sorensen(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    up += Math.abs(a[i] - b[i]);
    down += a[i] + b[i];
  }
  return up / down;
}
