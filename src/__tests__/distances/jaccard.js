import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Jaccard distance', function () {
  it('should be correct', function () {
    expect(distance.jaccard(v1, v1)).toBe(0);
    expect(distance.jaccard(v1, v2)).toBeCloseTo(6 / 31, 10);
  });
});
