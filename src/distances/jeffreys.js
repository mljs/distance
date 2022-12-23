export default function jeffreys(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += (a[i] - b[i]) * Math.log(a[i] / b[i]);
  }
  return ans;
}
