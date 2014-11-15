var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Tanimoto distance', function () {

    it('should return 0 with itself', function () {
        distance.tanimoto(v1, v1).should.equal(0);
    });

    it('should be correct', function () {
        distance.tanimoto(v1, v2).should.equal(0.33333333333333337);
        distance.tanimoto(v1, v2).should.equal(distance.soergel(v1, v2));
    });

});
