var distance = require('../..');

var v1 = [3, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Clark distance', function () {

    it('should return 0 with itself', function () {
        distance.clark(v1, v1).should.equal(0);
    });

    it('should be correct', function () {
        distance.clark(v1, v2).should.equal(2.997802197802198);
    });

});
