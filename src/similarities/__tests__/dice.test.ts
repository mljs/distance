import { similarity } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Dice similarity', () => {
  it('should be correct', () => {
    expect(similarity.dice(v1, v2)).toBe(50 / 56);
  });
});
