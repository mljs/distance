import { NumberArray } from 'cheminfo-types';

import motykaD from '../distances/motyka';

export default function motyka(a: NumberArray, b: NumberArray): number {
  return 1 - motykaD(a, b);
}
