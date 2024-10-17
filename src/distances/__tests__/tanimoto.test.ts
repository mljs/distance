import { describe, it, expect } from 'vitest';

import { distance } from '../..';

const v1 = [0.2, 0.4, 0.3, 0.1];
const v2 = [0.3, 0.2, 0.3, 0.2];
const buffer1 = new ArrayBuffer(3);
const bv1 = new Int8Array(buffer1);
bv1[0] = 1;
bv1[2] = 1;
const buffer2 = new ArrayBuffer(3);
const bv2 = new Int8Array(buffer2);
bv2[0] = 1;
bv2[1] = 1;
bv2[2] = 1;

describe('Tanimoto distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.tanimoto(v1, v1)).toBe(0);
    expect(distance.tanimoto(bv1, bv1, true)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.tanimoto(v1, v2)).toBe(0.33333333333333337);
    expect(distance.tanimoto(v1, v2)).toBe(distance.soergel(v1, v2));
    expect(distance.tanimoto(bv1, bv2, true)).toBeCloseTo(0.333, 1);
  });
});
