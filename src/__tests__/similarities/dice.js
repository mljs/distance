import { similarity } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Dice similarity', function () {
  it('should be correct', function () {
    expect(similarity.dice(v1, v2)).toBe(50 / 56);
  });
});
