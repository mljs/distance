export default function jensenShannon(a, b) {
  let ii = a.length;
  let p = 0;
  let q = 0;
  for (let i = 0; i < ii; i++) {
    p += a[i] * Math.log((2 * a[i]) / (a[i] + b[i]));
    q += b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return (p + q) / 2;
}
