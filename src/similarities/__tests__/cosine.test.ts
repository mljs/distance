import { similarity } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Cosine similarity', () => {
  it('should be correct', () => {
    expect(similarity.cosine(v1, v1)).toBeCloseTo(1, 5);
    expect(similarity.cosine(v1, v2)).toBe(0.8951435925492909);
  });
});
