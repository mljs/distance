var squaredChordD = require('./../distances/squaredChord');

module.exports = function squaredChord(a, b) {
    return 1 - squaredChordD(a, b);
};
