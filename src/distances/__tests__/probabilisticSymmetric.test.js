import { distance } from '../..';

var v1 = [3, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Probabilistic Symmetric distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.probabilisticSymmetric(v1, v1)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.probabilisticSymmetric(v1, v2)).toBe(12.18901098901099);
    expect(distance.probabilisticSymmetric(v1, v2)).toBe(
      2 * distance.squared(v1, v2)
    );
  });
});
