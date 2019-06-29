import diceD from '../distances/dice';

export default function dice(a, b) {
  return 1 - diceD(a, b);
}
