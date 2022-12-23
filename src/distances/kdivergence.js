export default function kdivergence(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += a[i] * Math.log((2 * a[i]) / (a[i] + b[i]));
  }
  return ans;
}
