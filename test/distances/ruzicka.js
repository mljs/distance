'use strict';

var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Ruzicka similarity', function () {

    it('should be correct', function () {
        distance.distance.ruzicka(v1, v2).should.equal(2 / 3);
    });

});
