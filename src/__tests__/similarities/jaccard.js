import { similarity } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Jaccard similarity', function () {
  it('should be correct', function () {
    expect(similarity.jaccard(v1, v2)).toBe(25 / 31);
  });
});
