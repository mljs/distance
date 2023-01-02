import { NumberArray } from 'cheminfo-types';

import diceD from '../distances/dice';
/**
 *Returns the Dice similarity between vectors a and b
 * @link [Dice similarity algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param {NumberArray} a - first vector
 * @param {NumberArray} b - second vector
 * @returns {number}
 */
export default function dice(a: NumberArray, b: NumberArray): number {
  return 1 - diceD(a, b);
}
