export default function kumarHassebrook(a, b) {
  var ii = a.length;
  var p = 0;
  var p2 = 0;
  var q2 = 0;
  for (var i = 0; i < ii; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (p2 + q2 - p);
}
