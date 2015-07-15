var tanimotoS = require('./../similarities/tanimoto');

module.exports = function tanimoto(a, b, bitvector) {
    if (bitvector)
        return 1 - tanimotoS(a, b, bitvector);
    else {
        var ii = a.length,
            p = 0,
            q = 0,
            m = 0;
        for (var i = 0; i < ii ; i++) {
            p += a[i];
            q += b[i];
            m += Math.min(a[i],b[i]);
        }
        return (p + q - 2 * m) / (p + q - m);
    }
};
