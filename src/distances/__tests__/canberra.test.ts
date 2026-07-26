import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];

test('should return 0 with itself', () => {
  expect(distance.canberra(v2, v2)).toBe(0);
});

test('should be correct', () => {
  expect(distance.canberra(v1, v2)).toBe(2.4989010989010993);
});
