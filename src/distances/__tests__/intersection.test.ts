import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

describe('Intersection distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.intersection(v2, v2)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.intersection(v1, v2)).toBe(0.20000000000000007);
    expect(distance.intersection(v1, v2)).toBeCloseTo(
      distance.manhattan(v1, v2) / 2,
      5,
    );
  });
});
