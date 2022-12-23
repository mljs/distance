import { NumberArray } from 'cheminfo-types';

import diceD from '../distances/dice';

export default function dice(a: NumberArray, b: NumberArray): number {
  return 1 - diceD(a, b);
}
