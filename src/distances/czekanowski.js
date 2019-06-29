import czekanowskiSimilarity from '../similarities/czekanowski';

export default function czekanowskiDistance(a, b) {
  return 1 - czekanowskiSimilarity(a, b);
}
