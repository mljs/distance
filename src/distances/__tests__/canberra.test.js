import { distance } from '../..';

var v1 = [0, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Canberra distance', function () {
  it('should return 0 with itself', function () {
    expect(distance.canberra(v2, v2)).toBe(0);
  });

  it('should be correct', function () {
    expect(distance.canberra(v1, v2)).toBe(2.4989010989010993);
  });
});
