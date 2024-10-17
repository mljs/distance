import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

describe('Motyka distance', () => {
  it('should return 0.5 with itself', () => {
    expect(distance.motyka(v1, v1)).toBe(0.5);
  });

  it('should be correct', () => {
    expect(distance.motyka(v1, v2)).toBe(0.6000000000000001);
  });
});
