var diceD = require('./../distances/dice');

module.exports = function dice(a, b) {
    return 1 - diceD(a,b);
};
