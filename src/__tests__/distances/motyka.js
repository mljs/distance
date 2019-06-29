import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Motyka distance', function () {
  it('should return 0.5 with itself', function () {
    expect(distance.motyka(v1, v1)).toBe(0.5);
  });

  it('should be correct', function () {
    expect(distance.motyka(v1, v2)).toBe(0.6000000000000001);
  });
});
