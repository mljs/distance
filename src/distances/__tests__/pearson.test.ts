import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];

test('should be correct', () => {
  expect(distance.pearson(v1, v2)).toBe(11.277777777777779);
});
