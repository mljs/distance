import kulczynskiD from '../distances/kulczynski';

export default function kulczynski(a, b) {
  return 1 / kulczynskiD(a, b);
}
