var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Czekanowski similarity', function () {

    it('should return 0 with itself', function () {
        distance.czekanowskiS(v1, v1).should.equal(1);
    });

    it('should be correct', function () {
        distance.czekanowskiS(v1, v2).should.equal(0.7999999999999999);
        distance.czekanowskiS(v1, v2).should.be.approximately(1 - distance.sorensen(v1, v2), 0.00001);
    });

});
