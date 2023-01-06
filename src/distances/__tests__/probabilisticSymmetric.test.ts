import { distance } from '../..';

let v1 = [3, 1, 4, 6, 2];
let v2 = [3, 6, 9, 4, 3];

describe('Probabilistic Symmetric distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.probabilisticSymmetric(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.probabilisticSymmetric(v1, v2)).toBe(12.18901098901099);
    expect(distance.probabilisticSymmetric(v1, v2)).toBe(
      2 * distance.squared(v1, v2),
    );
  });
});
