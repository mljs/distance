import { NumberArray } from 'cheminfo-types';

import kulczynskiD from '../distances/kulczynski';
/**
 *Returns the Kulczynski similarity between vectors a and b
 * @link [Kulczinski algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function kulczynski(a: NumberArray, b: NumberArray): number {
  return 1 / kulczynskiD(a, b);
}
