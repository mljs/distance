var motykaD = require('./../distances/motyka');

module.exports = function motyka(a, b) {
    return 1 - motykaD(a,b);
};
