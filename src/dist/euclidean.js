function squaredEuclidean(a, b) {
    var i = 0,
        ii = a.length,
        d = 0;
    for (; i < ii; i++) {
        d += (a[i] - b[i]) * (a[i] - b[i]);
    }
    return d;
}

exports.squaredEuclidean = squaredEuclidean;

exports.euclidean = function euclidean(a, b) {
    return Math.sqrt(squaredEuclidean(a, b));
};