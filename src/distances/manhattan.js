export default function manhattan(a, b) {
  var i = 0;
  var ii = a.length;
  var d = 0;
  for (; i < ii; i++) {
    d += Math.abs(a[i] - b[i]);
  }
  return d;
}
