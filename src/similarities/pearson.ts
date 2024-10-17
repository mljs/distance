import { NumberArray } from 'cheminfo-types';
import mean from 'ml-array-mean';

import cosine from './cosine';

export default function pearson(a: NumberArray, b: NumberArray): number {
  const avgA = mean(a);
  const avgB = mean(b);

  const newA = new Array(a.length);
  const newB = new Array(b.length);
  for (let i = 0; i < newA.length; i++) {
    newA[i] = a[i] - avgA;
    newB[i] = b[i] - avgB;
  }

  return cosine(newA, newB);
}
