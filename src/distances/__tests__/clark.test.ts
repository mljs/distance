import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [3, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];

test('should return 0 with itself', () => {
  expect(distance.clark(v1, v1)).toBe(0);
});

test('should be correct', () => {
  expect(distance.clark(v1, v2)).toBeCloseTo(0.85914671, 5);
});
