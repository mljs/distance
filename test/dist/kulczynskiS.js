var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Kulczynski similarity', function () {

    it('should be correct', function () {
        distance.kulczynskiS(v1, v2).should.equal(11/16);
    });

});