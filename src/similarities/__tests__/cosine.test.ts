import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

import { makeVector } from './makeVector.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(similarity.cosine(v1, v1)).toBe(1);
  expect(similarity.cosine(v1, v2)).toBe(0.8951435925492911);
});

test('self-similarity should be exactly 1', () => {
  for (let seed = 1; seed <= 100; seed++) {
    const vector = makeVector(seed);

    expect(similarity.cosine(vector, vector)).toBe(1);
  }
});
