import { distance } from '../..';

var v1 = [0, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('lorentzian distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.lorentzian(v1, v1)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.lorentzian(v1, v2)).toBeCloseTo(Math.log(864), 5);
  });
});