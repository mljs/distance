var dice = require('./dice');

module.exports = function diceS(a, b) {
    return 1 - dice(a,b);
};
