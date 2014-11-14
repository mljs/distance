module.exports = function jaccard(a, b) {
    var ii = a.length,
        p1 = 0,
        p2 = 0,
        q1 = 0,
        q2 = 0;
    for (var i = 0; i < ii ; i++) {
        p1 += a[i] * b[i];
        p2 += a[i] * a[i];
        q1 += b[i] * b[i];
        q2 += (a[i] - b[i]) * (a[i] - b[i]);
    }
    return q2 / (p2 + q1 - p1);
};
