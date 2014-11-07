module.exports = function manhattan(a, b) {
    var i = 0,
        ii = a.length,
        d = 0;
    for (; i < ii; i++) {
        d += Math.abs(a[i] - b[i]);
    }
    return d;
};
