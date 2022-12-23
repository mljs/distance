export default function canberra(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.abs(a[i] - b[i]) / (a[i] + b[i]);
  }
  return ans;
}
