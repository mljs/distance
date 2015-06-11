"use strict";

/**
 * Function that creates the tree
 * @param {Array <number>} X - chemical shifts of the signal
 * @param {Array <number>} Y - intensity of the signal
 * @param {number} from - the low limit of x
 * @param {number} to - the top limit of x
 * @param {number} minWindow - smallest range to accept in x
 * @param {number} threshold - smallest range to accept in y
 * @returns {{sum: number, center: number, left: {json}, right: {json}}}
 * left and right have the same structure than the parent, or have a
 * undefined value if are leafs
 */
function createTree (X, Y, from, to, minWindow, threshold) {
    if ((to - from) < minWindow)
        return undefined;
    var sum = 0;
    for (var i = 0; X[i] < to; i++) {
        if (X[i] > from)
            sum += Y[i];
    }
    if (sum < threshold) {
        return undefined;
    }
    var center = 0;
    for (var j = 0; X[j] < to; j++) {
        if (X[i] > from)
            center += X[j] * Y[j];
    }
    center = center / sum;
    if ((center - from) < (minWindow /4)) {
        return createTree(X, Y, center, to, minWindow, threshold);
    }
    else {
        if ((to - center) < (minWindow / 4)) {
            return createTree(X, Y, from, center, minWindow, threshold);
        }
        else {
            return {
                'sum': sum,
                'center': center,
                'left': createTree(X, Y, from, center, minWindow, threshold),
                'right': createTree(X, Y, center, to, minWindow, threshold)
            };
        }
    }
}

/**
 * Similarity between two nodes
 * @param {{sum: number, center: number, left: {json}, right: {json}}} a - tree A node
 * @param {{sum: number, center: number, left: {json}, right: {json}}} b - tree B node
 * @param {number} alpha - weights the relative importance of intensity vs. shift match
 * @param {number} beta - weights the relative importance of node matching and children matching
 * @param {number} gamma - controls the attenuation of the effect of chemical shift differences
 * @returns {number} similarity measure between tree nodes
 */
function S(a, b, alpha, beta, gamma) {
    if (a === undefined || b === undefined) {
        return 0;
    }
    else {
        var C = (alpha*Math.min(a.sum, b.sum)/Math.max(a.sum, b.sum)+ (1-alpha)*Math.exp(-gamma*Math.abs(a.center - b.center)));
    }
    return beta*C + (1-beta)*(S(a.left, b.left, alpha, beta, gamma)+S(a.right, b.right, alpha, beta, gamma));
}

/**
 * Builds a tree based in the spectra and compares this trees
 * @param {{x: Array<number>, y: Array<number>}} A - first spectra to be compared
 * @param {{x: Array<number>, y: Array<number>}} B - second spectra to be compared
 * @param {number} from - the low limit of x
 * @param {number} to - the top limit of x
 * @param {number} alpha - weights the relative importance of intensity vs. shift match
 * @param {number} beta - weights the relative importance of node matching and children matching
 * @param {number} gamma - controls the attenuation of the effect of chemical shift differences
 * @param {number} minWindow - smallest range to accept in x
 * @param {number} threshold - smallest range to accept in y
 * @returns {number} similarity measure between the spectra
 */
module.exports = function tree(A, B, from, to, alpha, beta, gamma, minWindow, threshold) {
    minWindow = (typeof minWindow === 'undefined') ? 0.16: minWindow;
    threshold = (typeof threshold === 'undefined') ? 0.01: threshold;
    alpha = (typeof alpha === 'undefined') ? 0.1: alpha;
    beta = (typeof beta === 'undefined') ? 0.33: beta;
    gamma = (typeof gamma === 'undefined') ? 0.001: gamma;
    var Atree = createTree(A.x, A.y, from, to, minWindow, threshold);
    var Btree = createTree(B.x, B.y, from, to, minWindow, threshold);
    console.log(Atree);
    return S(Atree, Btree, alpha, beta, gamma);
};

