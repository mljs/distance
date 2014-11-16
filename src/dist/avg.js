module.exports = function avg(a, b) {
    var ii = a.length,
        max = 0,
        ans = 0,
        aux = 0;
    for (var i = 0; i < ii ; i++) {
        aux = Math.abs(a[i] - b[i]);
        ans += aux;
        if (max < aux) {
            max = aux;
        }
    }
    return (max + ans) / 2;
};
