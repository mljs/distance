'use strict';

module.exports = function canberra(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii; i++) {
        ans += Math.abs(a[i] - b[i]) / (a[i] + b[i]);
    }
    return ans;
};
