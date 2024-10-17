import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];

describe('Pearson distance', () => {
  it('should be correct', () => {
    expect(distance.pearson(v1, v2)).toBe(11.277777777777779);
  });
});
