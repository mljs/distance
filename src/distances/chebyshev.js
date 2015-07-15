module.exports = function chebyshev(a, b) {
    var ii = a.length,
        max = 0,
        aux = 0;
    for (var i = 0; i < ii ; i++) {
        aux = Math.abs(a[i] - b[i]);
        if (max < aux) {
            max = aux;
        }
    }
    return max;
};
