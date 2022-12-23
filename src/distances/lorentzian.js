export default function lorentzian(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.log(Math.abs(a[i] - b[i]) + 1);
  }
  return ans;
}
