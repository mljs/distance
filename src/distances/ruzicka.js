export default function ruzicka(a, b) {
  let ii = a.length;
  let up = 0;
  let down = 0;
  for (let i = 0; i < ii; i++) {
    up += Math.min(a[i], b[i]);
    down += Math.max(a[i], b[i]);
  }
  return up / down;
}
