export default function hellinger(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return 2 * Math.sqrt(1 - ans);
}
