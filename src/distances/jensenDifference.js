export default function jensenDifference(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans +=
      (a[i] * Math.log(a[i]) + b[i] * Math.log(b[i])) / 2 -
      ((a[i] + b[i]) / 2) * Math.log((a[i] + b[i]) / 2);
  }
  return ans;
}
