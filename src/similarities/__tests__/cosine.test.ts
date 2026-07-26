import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(similarity.cosine(v1, v1)).toBeCloseTo(1, 5);
  expect(similarity.cosine(v1, v2)).toBe(0.8951435925492909);
});
