import { similarity } from '../..';

var v1 = [0, 1, 2, 3];
var v2 = [0, 1, 2, 1];

describe('Pearson correlation', function () {
  it('should be correct', function () {
    expect(similarity.pearson(v1, v1)).toBeCloseTo(1, 8);
    expect(similarity.pearson(v1, v2)).toBeCloseTo(0.6324555320336759, 8);
  });
});
