import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Intersection distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.intersection(v2, v2)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.intersection(v1, v2)).toBe(0.20000000000000007);
    expect(distance.intersection(v1, v2)).toBeCloseTo(
      distance.manhattan(v1, v2) / 2,
      5
    );
  });
});
