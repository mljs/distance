export default function hellinger(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return 2 * Math.sqrt(1 - ans);
}
