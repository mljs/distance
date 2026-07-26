import { expect, test } from 'vitest';

import { distance, similarity } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should return 0 with itself', () => {
  expect(similarity.intersection(v2, v2)).toBe(1);
});

test('should be correct', () => {
  expect(similarity.intersection(v1, v2)).toBeCloseTo(0.8, 4);
  expect(similarity.intersection(v1, v2)).toBeCloseTo(
    1 - distance.manhattan(v1, v2) / 2,
    4,
  );
});
