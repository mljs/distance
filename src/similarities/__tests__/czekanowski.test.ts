import { expect, test } from 'vitest';

import { distance, similarity } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should return 0 with itself', () => {
  expect(similarity.czekanowski(v1, v1)).toBe(1);
});

test('should be correct', () => {
  expect(similarity.czekanowski(v1, v2)).toBe(0.7999999999999999);
  expect(similarity.czekanowski(v1, v2)).toBeCloseTo(
    1 - distance.sorensen(v1, v2),
    5,
  );
});
