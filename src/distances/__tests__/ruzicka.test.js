import { distance } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Ruzicka similarity', function () {
  it('should be correct', function () {
    expect(distance.ruzicka(v1, v2)).toBe(2 / 3);
  });
});
