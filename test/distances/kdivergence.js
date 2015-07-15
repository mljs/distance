var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('K divergence distance', function () {

    it('should be correct', function () {
        distance.distance.kdivergence(v1, v2).should.equal(0.029897607907053952);
    });

});
