export default function manhattan(a, b) {
  let i = 0;
  let ii = a.length;
  let d = 0;
  for (; i < ii; i++) {
    d += Math.abs(a[i] - b[i]);
  }
  return d;
}
