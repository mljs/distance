var distance = require('../..');

var v1 = [0, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Minkowski distance', function () {

    it('should return 0 with itself', function () {
        distance.distance.minkowski(v1, v1,1).should.equal(0);
        distance.distance.minkowski(v1, v1,2).should.equal(0);
        distance.distance.minkowski(v1, v1,5).should.equal(0);
    });

    it('should be correct', function () {
        distance.distance.minkowski(v1, v2, 1).should.equal(distance.distance.manhattan(v1,v2));
        distance.distance.minkowski(v1, v2, 2).should.equal(distance.distance.euclidean(v1,v2));
        distance.distance.minkowski(v1, v2, 5).should.equal(Math.pow(6526,(1/5)));
    });

});
