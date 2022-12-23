export default function kumarJohnson(a, b) {
  let ii = a.length;
  let ans = 0;
  for (let i = 0; i < ii; i++) {
    ans +=
      Math.pow(a[i] * a[i] - b[i] * b[i], 2) / (2 * Math.pow(a[i] * b[i], 1.5));
  }
  return ans;
}
