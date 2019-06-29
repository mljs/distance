export default function taneja(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans +=
      ((a[i] + b[i]) / 2) *
      Math.log((a[i] + b[i]) / (2 * Math.sqrt(a[i] * b[i])));
  }
  return ans;
}
