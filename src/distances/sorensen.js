module.exports = function sorensen(a, b) {
    var ii = a.length,
        up = 0,
        down = 0;
    for (var i = 0; i < ii ; i++) {
        up += Math.abs(a[i] - b[i]);
        down += a[i] + b[i];
    }
    return up / down;
};
