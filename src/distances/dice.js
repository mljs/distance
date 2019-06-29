export default function dice(a, b) {
  var ii = a.length;
  var p = 0;
  var q1 = 0;
  var q2 = 0;
  for (var i = 0; i < ii; i++) {
    p += a[i] * a[i];
    q1 += b[i] * b[i];
    q2 += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return q2 / (p + q1);
}
