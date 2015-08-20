var distance = require('../..');

var v1 = [0, 1, 2, 3];
var v2 = [0, 1, 2, 1];

describe('Pearson correlation', function () {

    it('should be correct', function () {
        distance.similarity.pearson(v1, v1).should.approximately(1, Number.EPSILON);
        distance.similarity.pearson(v1, v2).should.approximately(0.6324555320336759, Number.EPSILON);
    });

});
