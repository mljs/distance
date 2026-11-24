import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(distance.jensenShannon(v1, v2)).toBe(0.0305187339069818);
});

test('identical distributions with zero probabilities have zero distance', () => {
  expect(distance.jensenShannon([1, 0], [1, 0])).toBe(0);
});

test('disjoint distributions have distance log(2)', () => {
  expect(distance.jensenShannon([1, 0], [0, 1])).toBeCloseTo(Math.LN2, 15);
});

test('zero probabilities preserve symmetry for overlapping distributions', () => {
  const a = [1, 0, 0];
  const b = [0.5, 0.5, 0];
  const expected = (3 / 4) * Math.log(4 / 3);

  expect(distance.jensenShannon(a, b)).toBeCloseTo(expected, 15);
  expect(distance.jensenShannon(b, a)).toBeCloseTo(expected, 15);
});
