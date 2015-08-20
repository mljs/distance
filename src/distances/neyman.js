module.exports = function neyman(a, b) {
    var i = 0,
        ii = a.length,
        d = 0;
    for (; i < ii; i++) {
        d += ((a[i] - b[i]) * (a[i] - b[i])) / a[i];
    }
    return d;
};
