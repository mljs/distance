export default function pearson(a, b) {
  var i = 0;
  var ii = a.length;
  var d = 0;
  for (; i < ii; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / b[i];
  }
  return d;
}
