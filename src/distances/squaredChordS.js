var squaredChord = require('./squaredChord');

module.exports = function squaredChordS(a, b) {
    return 1 - squaredChord(a, b);
};
