import squaredChordD from '../distances/squaredChord';

export default function squaredChord(a, b) {
  return 1 - squaredChordD(a, b);
}
