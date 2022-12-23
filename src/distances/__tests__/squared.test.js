import { distance } from '../..';

var v1 = [3, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Squared distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.squared(v1, v1)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.squared(v1, v2)).toBe(6.094505494505495);
  });
});
