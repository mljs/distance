'use strict';

var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Czekanowski distance', function () {

    it('should return 0 with itself', function () {
        distance.distance.czekanowski(v1, v1).should.equal(0);
    });

    it('should be correct', function () {
        distance.distance.czekanowski(v1, v2).should.equal(0.20000000000000007);
        distance.distance.czekanowski(v1, v2).should.be.approximately(distance.distance.sorensen(v1, v2), 0.00001);
    });

});
