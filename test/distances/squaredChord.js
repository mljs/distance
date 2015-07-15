var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Squared-Chord distance', function () {

    it('should be correct', function () {
        distance.squaredChord(v1, v2).should.equal(0.06157391401950735);
    });

});
