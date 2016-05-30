'use strict';

module.exports = function czekanowskiSimilarity(a, b) {
    var up = 0;
    var down = 0;
    for (var i = 0; i < a.length; i++) {
        up += Math.min(a[i], b[i]);
        down += a[i] + b[i];
    }
    return 2 * up / down;
};
