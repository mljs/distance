export default function topsoe(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans +=
      a[i] * Math.log((2 * a[i]) / (a[i] + b[i])) +
      b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return ans;
}
