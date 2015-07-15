module.exports = function jeffreys(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += (a[i] - b[i]) * Math.log(a[i] / b[i]);
    }
    return ans;
};
