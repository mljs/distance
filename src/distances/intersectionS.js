var intersection = require('./intersection');

module.exports = function intersectionS(a, b) {
    return 1 - intersection(a,b);
};
