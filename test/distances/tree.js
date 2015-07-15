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
        distance.distance.tree.calc(a, b, 1, 7).should.be.approximately(0.685253,10e-4);
    });

    it('exports tree', function () {
        distance.distance.tree.createTree(a.x, a.y, 1, 7).center.should.be.approximately(4.5,10e-4);
    });

});
