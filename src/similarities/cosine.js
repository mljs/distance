export default function cosine(a, b) {
  let ii = a.length;
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < ii; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
