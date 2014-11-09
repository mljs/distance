module.exports = function lorentzian(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += Math.log(Math.abs(a[i] - b[i]) + 1);
    }
    return ans;
};
