export default function matusita(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return Math.sqrt(2 - 2 * ans);
}
