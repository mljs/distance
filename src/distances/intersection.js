export default function intersection(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.min(a[i], b[i]);
  }
  return 1 - ans;
}
