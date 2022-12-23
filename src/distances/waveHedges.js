export default function waveHedges(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += 1 - Math.min(a[i], b[i]) / Math.max(a[i], b[i]);
  }
  return ans;
}
