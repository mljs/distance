import { similarity } from '../..';

let v1 = [0, 1, 2, 3];
let v2 = [0, 1, 2, 1];

describe('Pearson correlation', () => {
  it('should be correct', () => {
    expect(similarity.pearson(v1, v1)).toBeCloseTo(1, 8);
    expect(similarity.pearson(v1, v2)).toBeCloseTo(0.6324555320336759, 8);
  });
});
