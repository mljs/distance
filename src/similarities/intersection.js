import intersectionD from '../distances/intersection';

export default function intersection(a, b) {
  return 1 - intersectionD(a, b);
}
