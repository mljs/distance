var kulczynskiD = require('./../distances/kulczynski');

module.exports = function kulczynski(a, b) {
    return 1 / kulczynskiD(a, b);
};
