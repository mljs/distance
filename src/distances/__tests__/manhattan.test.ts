import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];

describe('City block distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.manhattan(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.manhattan(v1, v2)).toBe(16);
  });
});
