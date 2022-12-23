import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Wave Hedges distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.waveHedges(v1, v1)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.waveHedges(v1, v2)).toBe(4 / 3);
  });
});
