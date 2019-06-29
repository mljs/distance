import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Jaccard distance', function () {
  it('should be correct', function () {
    expect(distance.jaccard(v1, v2)).toBe(6 / 31);
  });
});
