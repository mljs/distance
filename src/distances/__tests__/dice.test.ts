import { distance } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Dice distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.dice(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.dice(v1, v2)).toBe(6 / 56);
  });
});