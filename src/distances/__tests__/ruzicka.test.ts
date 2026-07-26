import { expect, test } from 'vitest';

import { distance } from '../../index.ts';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];

test('should be correct', () => {
  expect(distance.ruzicka(v1, v2)).toBe(2 / 3);
});

test('should be 1 for identical vectors, not 0 as a distance would be', () => {
  expect(distance.ruzicka(v1, v1)).toBe(1);
  expect(distance.soergel(v1, v1)).toBe(0);
});

test('should grow as the vectors get more similar', () => {
  const far = distance.ruzicka([1, 0], [0, 1]);
  const near = distance.ruzicka([1, 0], [0.9, 0.1]);

  expect(far).toBe(0);
  expect(near).toBeCloseTo(0.818181, 5);
  expect(near).toBeGreaterThan(far);
});

test('should be the complement of the soergel distance', () => {
  expect(1 - distance.ruzicka(v1, v2)).toBeCloseTo(
    distance.soergel(v1, v2),
    10,
  );
});

test('should be the complement of the tanimoto distance', () => {
  expect(1 - distance.ruzicka(v1, v2)).toBeCloseTo(
    distance.tanimoto(v1, v2),
    10,
  );
});
