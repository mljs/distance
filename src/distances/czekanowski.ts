import { NumberArray } from 'cheminfo-types';

import czekanowskiSimilarity from '../similarities/czekanowski';
/**
 *Returns the Czekanowski distance between vectors a and b
 * @link [Czekanowski algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function czekanowskiDistance(
  a: NumberArray,
  b: NumberArray,
): number {
  return 1 - czekanowskiSimilarity(a, b);
}
