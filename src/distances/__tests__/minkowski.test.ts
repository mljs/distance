import { distance } from '../..';

let v1 = [0, 1, 4, 6, 2];
let v2 = [3, 6, 9, 4, 3];

describe('Minkowski distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.minkowski(v1, v1, 1)).toBe(0);
    expect(distance.minkowski(v1, v1, 2)).toBe(0);
    expect(distance.minkowski(v1, v1, 5)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.minkowski(v1, v2, 1)).toBe(distance.manhattan(v1, v2));
    expect(distance.minkowski(v1, v2, 2)).toBe(distance.euclidean(v1, v2));
    expect(distance.minkowski(v1, v2, 5)).toBe(6526 ** (1 / 5));
  });
});
