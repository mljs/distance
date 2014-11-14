module.exports = function fidelity(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += Math.sqrt(a[i] * b[i]);
    }
    return ans;
};
