export default function minkowski(a, b, p) {
  let i = 0;
  let ii = a.length;
  let d = 0;
  for (; i < ii; i++) {
    d += Math.pow(Math.abs(a[i] - b[i]), p);
  }
  return Math.pow(d, 1 / p);
}
