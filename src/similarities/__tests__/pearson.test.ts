import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

import { makeVector } from './makeVector.ts';

const v1 = [0, 1, 2, 3];
const v2 = [0, 1, 2, 1];

test('should be correct', () => {
  expect(similarity.pearson(v1, v1)).toBe(1);
  expect(similarity.pearson(v1, v2)).toBeCloseTo(0.6324555320336759, 8);
});

test('self-correlation should be exactly 1', () => {
  for (let seed = 1; seed <= 100; seed++) {
    const vector = makeVector(seed);

    expect(similarity.pearson(vector, vector)).toBe(1);
  }
});
