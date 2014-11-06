var squaredEuclidean = require('./squared-euclidean');

module.exports = function euclidean(a, b) {
    return Math.sqrt(squaredEuclidean(a, b));
};