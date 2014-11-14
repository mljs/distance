var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Cosine similarity', function () {

    it('should be correct', function () {
        distance.cosine(v1, v2).should.equal(0.25 / (Math.sqrt(0.3) * Math.sqrt(0.26)));
    });

});
