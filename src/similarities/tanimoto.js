export default function tanimoto(a, b, bitvector) {
  if (bitvector) {
    var inter = 0;
    var union = 0;
    for (var j = 0; j < a.length; j++) {
      inter += a[j] && b[j];
      union += a[j] || b[j];
    }
    if (union === 0) {
      return 1;
    }
    return inter / union;
  } else {
    var ii = a.length;
    var p = 0;
    var q = 0;
    var m = 0;
    for (var i = 0; i < ii; i++) {
      p += a[i];
      q += b[i];
      m += Math.min(a[i], b[i]);
    }
    return 1 - (p + q - 2 * m) / (p + q - m);
  }
}
