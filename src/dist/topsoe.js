module.exports = function topsoe(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += a[i] * Math.log(2 * a[i] / (a[i] + b[i])) + b[i] * Math.log(2 * b[i] / (a[i] + b[i]));
    }
    return ans;
};
