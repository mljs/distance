export default function additiveSymmetric(a, b) {
  let i = 0;
  let ii = a.length;
  let d = 0;
  for (; i < ii; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i]) * (a[i] + b[i])) / (a[i] * b[i]);
  }
  return d;
}
