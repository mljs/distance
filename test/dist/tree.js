"use strict";
var distance = require('../..');

var a = {
    'x': [1, 2, 3, 4, 5, 6, 7],
    'y': [0.3, 0.7, 4, 0.3, 0.2, 5, 0.3]
};
var b = {
    'x': [1, 2, 3, 4, 5, 6, 7],
    'y': [0.3, 4, 0.7, 0.3, 5, 0.2, 0.3]
};

describe('Tree similarity', function () {

    it('should be correct', function () {
        distance.tree(a, b, 1, 7, 0.1, 0.33, 0.001, 2).should.equal(0.0610374678139636);
    });

});
