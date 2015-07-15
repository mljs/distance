module.exports = function minkowski(a, b, p) {
    var i = 0,
        ii = a.length,
        d = 0;
    for (; i < ii; i++) {
        d += Math.pow(Math.abs(a[i] - b[i]),p);
    }
    return Math.pow(d,(1/p));
};
