/*
 * Differential test: is `x ** 1.5` bit-identical to `x * Math.sqrt(x)`?
 *
 * Mathematically x^1.5 = x * sqrt(x), but the two expressions round
 * differently: the multiplication form rounds twice (sqrt, then *), while `**`
 * calls the engine's pow. Neither is guaranteed correctly rounded by the spec
 * (ECMA-262 leaves Math.pow implementation-defined), so this measures the
 * actual disagreement instead of assuming it away.
 *
 * Run with: node benchmark/equivalence.js
 */

function log(message) {
  // eslint-disable-next-line no-console -- benchmark output
  console.log(message);
}

const buffer = new DataView(new ArrayBuffer(8));

/**
 * Distance in representable doubles (ULPs) between two finite values.
 * @param x
 * @param y
 */
function ulpDistance(x, y) {
  if (x === y) return 0n;
  if (Number.isNaN(x) || Number.isNaN(y)) return null;
  return ordinal(y) - ordinal(x);
}

/**
 * Maps a double onto a monotonic signed integer, so subtraction counts ULPs.
 * @param value
 */
function ordinal(value) {
  buffer.setFloat64(0, value);
  const bits = buffer.getBigUint64(0);
  return bits & 0x8000000000000000n
    ? -(bits & 0x7fffffffffffffffn)
    : BigInt(bits);
}

log('--- special values ---');
for (const x of [
  0,
  -0,
  1,
  -1,
  Infinity,
  -Infinity,
  Number.NaN,
  Number.MIN_VALUE,
  Number.MAX_VALUE,
  Number.EPSILON,
]) {
  const pow = x ** 1.5;
  const mul = x * Math.sqrt(x);
  const same = Object.is(pow, mul);
  log(
    `  x = ${String(x).padEnd(24)} x**1.5 = ${String(pow).padEnd(24)} x*sqrt(x) = ${String(mul).padEnd(24)} ${same ? 'same' : 'DIFFERENT'}`,
  );
}

log('\n--- random sweep across magnitudes ---');
let state = 88172645463325252n;
const mask = (1n << 64n) - 1n;
function nextBits() {
  state ^= (state << 13n) & mask;
  state ^= state >> 7n;
  state ^= (state << 17n) & mask;
  return state;
}

for (const [label, low, high] of [
  ['[1e-300, 1e-200)', 1e-300, 1e-200],
  ['[1e-10, 1e-5)', 1e-10, 1e-5],
  ['[0.1, 2)', 0.1, 2],
  ['[1, 1000)', 1, 1000],
  ['[1e100, 1e200)', 1e100, 1e200],
]) {
  const SAMPLES = 2_000_000;
  const logLow = Math.log(low);
  const logSpan = Math.log(high) - logLow;
  let identical = 0;
  let maxUlp = 0n;
  let maxRelative = 0;
  for (let i = 0; i < SAMPLES; i++) {
    const unit = Number(nextBits() >> 11n) / 2 ** 53;
    const x = Math.exp(logLow + unit * logSpan);
    const pow = x ** 1.5;
    const mul = x * Math.sqrt(x);
    if (pow === mul) {
      identical++;
      continue;
    }
    const ulps = ulpDistance(pow, mul);
    const absolute = ulps < 0n ? -ulps : ulps;
    if (absolute > maxUlp) maxUlp = absolute;
    const relative = Math.abs(pow - mul) / Math.abs(pow);
    if (relative > maxRelative) maxRelative = relative;
  }
  const percent = ((identical / SAMPLES) * 100).toFixed(4);
  log(
    `  ${label.padEnd(18)} identical: ${percent}%  max |diff|: ${maxUlp} ulp  max relative: ${maxRelative.toExponential(3)}`,
  );
}

log('\n--- exhaustive mantissa scan in [1, 2) ---');
{
  // Walk consecutive doubles from 1.0 upward: every value tested is adjacent to
  // the previous one, so this is exhaustive over the scanned prefix.
  const STEPS = 5_000_000;
  let identical = 0;
  let maxUlp = 0n;
  let x = 1;
  for (let i = 0; i < STEPS; i++) {
    const pow = x ** 1.5;
    const mul = x * Math.sqrt(x);
    if (pow === mul) {
      identical++;
    } else {
      const ulps = ulpDistance(pow, mul);
      const absolute = ulps < 0n ? -ulps : ulps;
      if (absolute > maxUlp) maxUlp = absolute;
    }
    x = nextUp(x);
  }
  log(
    `  ${STEPS} consecutive doubles from 1.0: identical ${((identical / STEPS) * 100).toFixed(4)}%  max |diff|: ${maxUlp} ulp`,
  );
}

function nextUp(value) {
  buffer.setFloat64(0, value);
  buffer.setBigUint64(0, buffer.getBigUint64(0) + 1n);
  return buffer.getFloat64(0);
}
