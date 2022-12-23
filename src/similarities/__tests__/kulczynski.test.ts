import { similarity } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Kulczynski similarity', () => {
  it('should be correct', () => {
    expect(similarity.kulczynski(v1, v2)).toBe(1.9999999999999996);
  });
});
