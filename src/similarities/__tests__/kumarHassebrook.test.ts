import { describe, it, expect } from 'vitest';

import { similarity } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

describe('Kumar-Hassebrook similarity', () => {
  it('should be correct', () => {
    expect(similarity.kumarHassebrook(v1, v1)).toBe(1);
    expect(similarity.kumarHassebrook(v1, v2)).toBe(0.8064516129032256);
  });
});
