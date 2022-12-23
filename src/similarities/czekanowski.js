export default function czekanowskiSimilarity(a, b) {
  let up = 0;
  let down = 0;
  for (let i = 0; i < a.length; i++) {
    up += Math.min(a[i], b[i]);
    down += a[i] + b[i];
  }
  return (2 * up) / down;
}
