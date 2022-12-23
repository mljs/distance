import { NumberArray } from 'cheminfo-types';

import kulczynskiD from '../distances/kulczynski';

export default function kulczynski(a: NumberArray, b: NumberArray): number {
  return 1 / kulczynskiD(a, b);
}
