module.exports = function harmonicMean(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += (a[i] * b[i]) / (a[i] + b[i]);
    }
    return 2 * ans;
};
