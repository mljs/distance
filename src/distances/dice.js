module.exports = function dice(a, b) {
    var ii = a.length,
        p = 0,
        q1 = 0,
        q2 = 0;
    for (var i = 0; i < ii ; i++) {
        p += a[i] * a[i];
        q1 += b[i] * b[i];
        q2 += (a[i] - b[i]) * (a[i] - b[i]);
    }
    return q2 / (p + q1);
};
