export default function intersection(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans += Math.min(a[i], b[i]);
  }
  return 1 - ans;
}
