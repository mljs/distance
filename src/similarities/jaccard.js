var jaccardD = require('./../distances/jaccard');

module.exports = function jaccard(a, b) {
    return 1 - jaccardD(a, b);
};
