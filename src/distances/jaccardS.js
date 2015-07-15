var jaccard = require('./jaccard');

module.exports = function jaccardS(a, b) {
    return 1 - jaccard(a, b);
};
