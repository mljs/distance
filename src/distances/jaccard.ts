import { NumberArray } from 'cheminfo-types';

import kumarHassebrook from '../similarities/kumarHassebrook';

export default function jaccard(a: NumberArray, b: NumberArray): number {
  return 1 - kumarHassebrook(a, b);
}
