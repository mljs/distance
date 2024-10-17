import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

describe('Jaccard distance', () => {
  it('should be correct', () => {
    expect(distance.jaccard(v1, v1)).toBe(0);
    expect(distance.jaccard(v1, v2)).toBeCloseTo(6 / 31, 10);
  });
});
