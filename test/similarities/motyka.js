var distance = require('../../src/index.js');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Motyka similarity', function () {

    it('should return 0.5 with itself', function () {
        distance.similarity.motyka(v1, v1).should.equal(0.5);
    });

    it('should be correct', function () {
        distance.similarity.motyka(v1, v2).should.be.approximately(0.4, 0.001);
    });

});
