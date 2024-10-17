import { NumberArray } from 'cheminfo-types';

import { kulczynski as kulczynskiD } from '../distances/kulczynski';
/**
 *Returns the Kulczynski similarity between vectors a and b
 * @link [Kulczinski algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 */
export function kulczynski(a: NumberArray, b: NumberArray): number {
  return 1 / kulczynskiD(a, b);
}
