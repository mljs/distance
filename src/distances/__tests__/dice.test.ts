import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should return 0 with itself', () => {
  expect(distance.dice(v1, v1)).toBe(0);
});

test('should be correct', () => {
  expect(distance.dice(v1, v2)).toBe(6 / 56);
});
