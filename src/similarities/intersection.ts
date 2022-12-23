import { NumberArray } from 'cheminfo-types';

import intersectionD from '../distances/intersection';

export default function intersection(a: NumberArray, b: NumberArray): number {
  return 1 - intersectionD(a, b);
}
