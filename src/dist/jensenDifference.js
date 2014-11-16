module.exports = function jensenDifference(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += ((a[i] * Math.log(a[i]) + b[i] * Math.log(b[i])) / 2) - ((a[i] + b[i]) / 2) * Math.log((a[i] + b[i]) / 2);
    }
    return ans;
};
