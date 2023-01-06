import { distance } from '../..';

let v1 = [0, 1, 4, 6, 2];
let v2 = [3, 6, 9, 4, 3];

describe('lorentzian distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.lorentzian(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.lorentzian(v1, v2)).toBeCloseTo(Math.log(864), 5);
  });
});
