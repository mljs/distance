var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Intersection similarity', function () {

    it('should return 0 with itself', function () {
        distance.similarity.intersection(v2, v2).should.equal(1);
    });

    it('should be correct', function () {
        distance.similarity.intersection(v1, v2).should.be.approximately(0.8, 0.0001);
        distance.similarity.intersection(v1, v2).should.be.approximately( 1 - (distance.distance.manhattan(v1, v2) / 2), 0.00001);
    });

});
