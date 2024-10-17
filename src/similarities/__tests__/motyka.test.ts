import { describe, it, expect } from 'vitest';

import { similarity } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

describe('Motyka similarity', () => {
  it('should return 0.5 with itself', () => {
    expect(similarity.motyka(v1, v1)).toBe(0.5);
  });

  it('should be correct', () => {
    expect(similarity.motyka(v1, v2)).toBeCloseTo(0.4, 3);
  });
});
