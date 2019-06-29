export default function jensenShannon(a, b) {
  var ii = a.length;
  var p = 0;
  var q = 0;
  for (var i = 0; i < ii; i++) {
    p += a[i] * Math.log((2 * a[i]) / (a[i] + b[i]));
    q += b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return (p + q) / 2;
}
