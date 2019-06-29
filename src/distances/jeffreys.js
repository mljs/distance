export default function jeffreys(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans += (a[i] - b[i]) * Math.log(a[i] / b[i]);
  }
  return ans;
}
