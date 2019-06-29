import { distance } from '../..';

var v1 = [0, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Pearson distance', function () {
  it('should be correct', function () {
    expect(distance.pearson(v1, v2)).toBe(11.277777777777779);
  });
});
