import { NumberArray } from 'cheminfo-types';

import czekanowskiSimilarity from '../similarities/czekanowski';

export default function czekanowskiDistance(
  a: NumberArray,
  b: NumberArray,
): number {
  return 1 - czekanowskiSimilarity(a, b);
}
