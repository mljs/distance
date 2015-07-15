module.exports = function kumarJohnson(a, b) {
    var ii = a.length,
        ans = 0;
    for (var i = 0; i < ii ; i++) {
        ans += Math.pow(a[i] * a[i] - b[i] * b[i],2) / (2 * Math.pow(a[i] * b[i],1.5));
    }
    return ans;
};
