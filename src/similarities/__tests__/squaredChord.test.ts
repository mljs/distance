import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(similarity.squaredChord(v1, v2)).toBe(0.9384260859804927);
});
