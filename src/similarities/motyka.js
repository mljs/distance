import motykaD from '../distances/motyka';

export default function motyka(a, b) {
  return 1 - motykaD(a, b);
}
