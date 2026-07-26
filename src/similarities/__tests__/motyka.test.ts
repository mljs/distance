import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should return 0.5 with itself', () => {
  expect(similarity.motyka(v1, v1)).toBe(0.5);
});

test('should be correct', () => {
  expect(similarity.motyka(v1, v2)).toBeCloseTo(0.4, 3);
});
