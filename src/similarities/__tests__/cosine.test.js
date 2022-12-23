import { similarity } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Cosine similarity', function () {
  it('should be correct', function () {
    expect(similarity.cosine(v1, v1)).toBeCloseTo(1, 5);
    expect(similarity.cosine(v1, v2)).toBe(0.8951435925492909);
  });
});
