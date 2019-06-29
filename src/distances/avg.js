export default function avg(a, b) {
  var ii = a.length;
  var max = 0;
  var ans = 0;
  var aux = 0;
  for (var i = 0; i < ii; i++) {
    aux = Math.abs(a[i] - b[i]);
    ans += aux;
    if (max < aux) {
      max = aux;
    }
  }
  return (max + ans) / 2;
}
