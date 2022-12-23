export default function sorensen(a, b) {
  let ii = a.length;
  let up = 0;
  let down = 0;
  for (let i = 0; i < ii; i++) {
    up += Math.abs(a[i] - b[i]);
    down += a[i] + b[i];
  }
  return up / down;
}
