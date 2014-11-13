var czekanowski = require('./czekanowski');

module.exports = function czekanowskiS(a, b) {
    return 1 - czekanowski(a,b);
};
