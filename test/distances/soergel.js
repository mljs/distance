'use strict';

var distance = require('../..');

var v1 = [0, 1, 4, 6, 2];
var v2 = [3, 6, 9, 4, 3];

describe('Soergel distance', function () {

    it('should return 0 with itself', function () {
        distance.distance.soergel(v1, v1).should.equal(0);
    });

    it('should be correct', function () {
        distance.distance.soergel(v1, v2).should.equal(16 / 27);
    });

});
