export default function squaredChord(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans +=
      (Math.sqrt(a[i]) - Math.sqrt(b[i])) * (Math.sqrt(a[i]) - Math.sqrt(b[i]));
  }
  return ans;
}
