import { NumberArray } from 'cheminfo-types';

export default function minkowski(a: NumberArray, b: NumberArray, p: number) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
