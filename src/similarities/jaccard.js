import jaccardD from '../distances/jaccard';

export default function jaccard(a, b) {
  return 1 - jaccardD(a, b);
}
