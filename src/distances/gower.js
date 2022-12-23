export default function gower(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.abs(a[i] - b[i]);
  }
  return ans / ii;
}
