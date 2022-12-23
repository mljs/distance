import { distance } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Czekanowski distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.czekanowski(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.czekanowski(v1, v2)).toBe(0.20000000000000007);
    expect(distance.czekanowski(v1, v2)).toBeCloseTo(
      distance.sorensen(v1, v2),
      5,
    );
  });
});
