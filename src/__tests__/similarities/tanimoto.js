import { similarity } from '../..';

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];
var buffer1 = new ArrayBuffer(3);
var bv1 = new Int8Array(buffer1);
bv1[0] = 1;
bv1[2] = 1;
var buffer2 = new ArrayBuffer(3);
var bv2 = new Int8Array(buffer2);
bv2[0] = 1;
bv2[1] = 1;
bv2[2] = 1;

describe('Tanimoto similarity', function () {
  it('should return 1 with itself', function () {
    expect(similarity.tanimoto(v1, v1)).toBe(1);
    expect(similarity.tanimoto(bv1, bv1, true)).toBe(1);
  });

  it('should be correct', function () {
    expect(similarity.tanimoto(v1, v2)).toBeCloseTo(0.666, 2);
    expect(similarity.tanimoto(bv1, bv2, true)).toBeCloseTo(0.666, 2);
  });
});
