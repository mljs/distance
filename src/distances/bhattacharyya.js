export default function bhattacharyya(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans += Math.sqrt(a[i] * b[i]);
  }
  return -Math.log(ans);
}
