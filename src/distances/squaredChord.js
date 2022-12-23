export default function squaredChord(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += (Math.sqrt(a[i]) - Math.sqrt(b[i])) ** 2;
  }
  return ans;
}
