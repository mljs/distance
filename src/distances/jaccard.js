export default function jaccard(a, b) {
  var ii = a.length;
  var p1 = 0;
  var p2 = 0;
  var q1 = 0;
  var q2 = 0;
  for (var i = 0; i < ii; i++) {
    p1 += a[i] * b[i];
    p2 += a[i] * a[i];
    q1 += b[i] * b[i];
    q2 += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return q2 / (p2 + q1 - p1);
}
