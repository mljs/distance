var intersectionD = require('./../distances/intersection');

module.exports = function intersection(a, b) {
    return 1 - intersectionD(a,b);
};
