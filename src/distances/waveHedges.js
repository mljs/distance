module.exports = function waveHedges(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += 1 - (Math.min(a[i], b[i]) / Math.max(a[i], b[i]));
    }
    return ans;
};
