import kumarHassebrook from '../similarities/kumarHassebrook';

export default function jaccard(a, b) {
  return 1 - kumarHassebrook(a, b);
}
