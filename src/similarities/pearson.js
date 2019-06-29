import mean from 'ml-array-mean';

import cosine from './cosine';

export default function pearson(a, b) {
  var avgA = mean(a);
  var avgB = mean(b);

  var newA = new Array(a.length);
  var newB = new Array(b.length);
  for (var i = 0; i < newA.length; i++) {
    newA[i] = a[i] - avgA;
    newB[i] = b[i] - avgB;
  }

  return cosine(newA, newB);
}
