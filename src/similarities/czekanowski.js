var czekanowskiD = require('./../distances/czekanowski');

module.exports = function czekanowski(a, b) {
    return 1 - czekanowskiD(a,b);
};
