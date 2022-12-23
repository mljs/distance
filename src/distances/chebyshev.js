export default function chebyshev(a, b) {
  let ii = a.length;
  let max = 0;
  let aux = 0;
  for (let i = 0; i < ii; i++) {
    aux = Math.abs(a[i] - b[i]);
    if (max < aux) {
      max = aux;
    }
  }
  return max;
}
