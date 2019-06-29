export default function clark(a, b) {
  var i = 0;
  var ii = a.length;
  var d = 0;
  for (; i < ii; i++) {
    d += Math.sqrt(
      ((a[i] - b[i]) * (a[i] - b[i])) / ((a[i] + b[i]) * (a[i] + b[i]))
    );
  }
  return 2 * d;
}
