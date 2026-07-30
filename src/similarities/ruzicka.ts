import type { NumberArray } from 'cheminfo-types';
/**
 *Returns the Ruzicka similarity between vectors a and b, also known as the
 * weighted Jaccard similarity. It is 1 for identical vectors; the matching
 * distance is `soergel`.
 * @link [Ruzicka algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @link [Weighted Jaccard similarity](https://en.wikipedia.org/wiki/Jaccard_index#Weighted_Jaccard_similarity_and_distance)
 * @param a - first vector
 * @param b - second vector
 */
export function ruzicka(a: NumberArray, b: NumberArray): number {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    up += Math.min(a[i], b[i]);
    down += Math.max(a[i], b[i]);
  }
  return up / down;
}
