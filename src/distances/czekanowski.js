'use strict';

const czekanowskiSimilarity = require('../similarities/czekanowski');

module.exports = function czekanowskiDistance(a, b) {
    return 1 - czekanowskiSimilarity(a, b);
};
