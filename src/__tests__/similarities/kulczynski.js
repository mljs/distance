import { similarity } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Kulczynski similarity', function () {
  it('should be correct', function () {
    expect(similarity.kulczynski(v1, v2)).toBe(1.9999999999999996);
  });
});
