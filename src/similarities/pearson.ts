import type { NumberArray } from 'cheminfo-types';

/**
 * Returns the Pearson correlation between vectors a and b, i.e. the cosine
 * similarity of the mean-centred vectors
 * @param a - first vector
 * @param b - second vector
 */
export function pearson(a: NumberArray, b: NumberArray): number {
  const length = a.length;
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < length; i++) {
    sumA += a[i];
    sumB += b[i];
  }
  const avgA = sumA / length;
  const avgB = sumB / length;

  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < length; i++) {
    const centredA = a[i] - avgA;
    const centredB = b[i] - avgB;
    p += centredA * centredB;
    p2 += centredA * centredA;
    q2 += centredB * centredB;
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
