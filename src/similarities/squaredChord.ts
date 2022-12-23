import { NumberArray } from 'cheminfo-types';

import squaredChordD from '../distances/squaredChord';

export default function squaredChord(a: NumberArray, b: NumberArray): number {
  return 1 - squaredChordD(a, b);
}
