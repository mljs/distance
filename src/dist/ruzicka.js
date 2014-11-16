module.exports = function ruzicka(a, b) {
    var ii = a.length,
        up = 0,
        down = 0;
    for (var i = 0; i < ii ; i++) {
        up += Math.min(a[i],b[i]);
        down += Math.max(a[i],b[i]);
    }
    return up / down;
};
