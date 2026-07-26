import { expect, test } from 'vitest';

import { similarity } from '../../index.ts';

const a = [
  [1, 2, 3, 4, 5, 6, 7],
  [0.3, 0.7, 4, 0.3, 0.2, 5, 0.3],
];
const b = [
  [1, 2, 3, 4, 5, 6, 7],
  [0.3, 4, 0.7, 0.3, 5, 0.2, 0.3],
];

test('should be correct', () => {
  expect(similarity.tree.treeSimilarity(a, b, 1, 7)).toBeCloseTo(0.65335, 3);
});

test('exports tree', () => {
  expect(similarity.tree.createTree(a, a, 1, 7).center).toBeCloseTo(4.3714, 3);
});
