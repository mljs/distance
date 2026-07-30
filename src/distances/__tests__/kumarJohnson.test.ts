import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(distance.kumarJohnson(v1, v2)).toBeCloseTo(0.5623488044808911, 15);
});
