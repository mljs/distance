var distance = require('../..');

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
        distance.similarity.tanimoto(v1, v1).should.equal(1);
        distance.similarity.tanimoto(bv1, bv1, true).should.equal(1);
    });

    it('should be correct', function () {
        distance.similarity.tanimoto(v1, v2).should.be.approximately(0.666,0.01);
        distance.similarity.tanimoto(bv1, bv2, true).should.be.approximately(0.666,0.01);
    });

});
