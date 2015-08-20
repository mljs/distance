'use strict';

var stat=require('ml-stat').array;
var cosine=require('./cosine');

module.exports = function pearson(a, b) {
    var avgA=stat.mean(a);
    var avgB=stat.mean(b);

    var newA=new Array(a.length);
    var newB=new Array(b.length);
    for (var i=0; i<newA.length; i++) {
        newA[i]=a[i]-avgA;
        newB[i]=b[i]-avgB;
    }

    return cosine(newA, newB);
};
