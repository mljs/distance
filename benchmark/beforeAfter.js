/*
 * Compares the previous implementation of each optimized function with the
 * current one. Both versions are copied in here so that they run in the same
 * process on the same data.
 *
 * Run with: node benchmark/beforeAfter.js
 */
import Benchmark from 'benchmark';

const LENGTHS = [1000, 10000, 100000];
const KINDS = ['Array', 'Float64Array'];

function makeArrays(kind, length) {
  const a =
    kind === 'Float64Array' ? new Float64Array(length) : new Array(length);
  const b =
    kind === 'Float64Array' ? new Float64Array(length) : new Array(length);
  let state = 42;
  for (let i = 0; i < length; i++) {
    state = (state * 1103515245 + 12345) % 2147483648;
    a[i] = 0.1 + (state / 2147483648) * 2;
    state = (state * 1103515245 + 12345) % 2147483648;
    b[i] = 0.1 + (state / 2147483648) * 2;
  }
  return [a, b];
}

/* ------------------------------------------------ distances/pearson */
function pearsonBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / b[i];
  }
  return d;
}
function pearsonAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const bi = b[i];
    const diff = a[i] - bi;
    d += (diff * diff) / bi;
  }
  return d;
}

/* ------------------------------------------------ distances/squared */
function squaredBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / (a[i] + b[i]);
  }
  return d;
}
function squaredAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    d += (diff * diff) / (ai + bi);
  }
  return d;
}

/* ------------------------------------------------ similarities/cosine */
function cosineBefore(a, b) {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
function cosineAfter(a, b) {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    p += ai * bi;
    p2 += ai * ai;
    q2 += bi * bi;
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}

/* ------------------------------------------------ distances/clark */
function clarkBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += (Math.abs(a[i] - b[i]) / (a[i] + b[i])) ** 2;
  }
  return Math.sqrt(d);
}
function clarkAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const ratio = (ai - bi) / (ai + bi);
    d += ratio * ratio;
  }
  return Math.sqrt(d);
}

/* ------------------------------------------------ distances/kumarJohnson */
function kumarJohnsonBefore(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += (a[i] * a[i] - b[i] * b[i]) ** 2 / (2 * (a[i] * b[i]) ** 1.5);
  }
  return ans;
}
function kumarJohnsonAfter(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const numerator = ai * ai - bi * bi;
    const prod = ai * bi;
    ans += (numerator * numerator) / (2 * prod * Math.sqrt(prod));
  }
  return ans;
}

/* ------------------------------------------------ distances/minkowski
 * Each order gets its own copy on purpose. Calling one shared `minkowski` with
 * p = 1 and p = 2 makes the exponent polymorphic and lets the two orders share
 * inline caches, which hides the difference the branches are meant to measure.
 */
function minkowskiBeforeP1(a, b, p) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
function minkowskiAfterP1(a, b, p) {
  let d = 0;
  if (p === 1) {
    for (let i = 0; i < a.length; i++) {
      d += Math.abs(a[i] - b[i]);
    }
    return d;
  }
  if (p === 2) {
    for (let i = 0; i < a.length; i++) {
      const diff = a[i] - b[i];
      d += diff * diff;
    }
    return Math.sqrt(d);
  }
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
function minkowskiBeforeP2(a, b, p) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}
function minkowskiAfterP2(a, b, p) {
  let d = 0;
  if (p === 1) {
    for (let i = 0; i < a.length; i++) {
      d += Math.abs(a[i] - b[i]);
    }
    return d;
  }
  if (p === 2) {
    for (let i = 0; i < a.length; i++) {
      const diff = a[i] - b[i];
      d += diff * diff;
    }
    return Math.sqrt(d);
  }
  for (let i = 0; i < a.length; i++) {
    d += Math.abs(a[i] - b[i]) ** p;
  }
  return d ** (1 / p);
}

/* ------------------------------------------------ similarities/pearson */
function meanOf(input) {
  let sumValue = 0;
  for (const value of input) sumValue += value;
  return sumValue / input.length;
}
// A private copy of cosine: sharing cosineBefore with the cosine pair would
// feed it both Float64Array and Array inputs and make its loads polymorphic.
function cosineForPearson(a, b) {
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < a.length; i++) {
    p += a[i] * b[i];
    p2 += a[i] * a[i];
    q2 += b[i] * b[i];
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}
function pearsonSimilarityBefore(a, b) {
  const avgA = meanOf(a);
  const avgB = meanOf(b);
  const newA = new Array(a.length);
  const newB = new Array(b.length);
  for (let i = 0; i < newA.length; i++) {
    newA[i] = a[i] - avgA;
    newB[i] = b[i] - avgB;
  }
  return cosineForPearson(newA, newB);
}
function pearsonSimilarityAfter(a, b) {
  const length = a.length;
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < length; i++) {
    sumA += a[i];
    sumB += b[i];
  }
  const avgA = sumA / length;
  const avgB = sumB / length;
  let p = 0;
  let p2 = 0;
  let q2 = 0;
  for (let i = 0; i < length; i++) {
    const centredA = a[i] - avgA;
    const centredB = b[i] - avgB;
    p += centredA * centredB;
    p2 += centredA * centredA;
    q2 += centredB * centredB;
  }
  return p / (Math.sqrt(p2) * Math.sqrt(q2));
}

/* ------------------------------------------------ topsoe */
function topsoeBefore(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans +=
      a[i] * Math.log((2 * a[i]) / (a[i] + b[i])) +
      b[i] * Math.log((2 * b[i]) / (a[i] + b[i]));
  }
  return ans;
}
function topsoeAfter(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const sum = ai + bi;
    ans += ai * Math.log((2 * ai) / sum) + bi * Math.log((2 * bi) / sum);
  }
  return ans;
}

const PAIRS = [
  { name: 'distances/pearson', before: pearsonBefore, after: pearsonAfter },
  { name: 'distances/squared', before: squaredBefore, after: squaredAfter },
  { name: 'similarities/cosine', before: cosineBefore, after: cosineAfter },
  { name: 'distances/clark', before: clarkBefore, after: clarkAfter },
  { name: 'distances/topsoe', before: topsoeBefore, after: topsoeAfter },
  {
    name: 'distances/kumarJohnson',
    before: kumarJohnsonBefore,
    after: kumarJohnsonAfter,
  },
  {
    name: 'distances/minkowski p=1',
    before: (a, b) => minkowskiBeforeP1(a, b, 1),
    after: (a, b) => minkowskiAfterP1(a, b, 1),
  },
  {
    name: 'distances/minkowski p=2',
    before: (a, b) => minkowskiBeforeP2(a, b, 2),
    after: (a, b) => minkowskiAfterP2(a, b, 2),
  },
  {
    name: 'similarities/pearson',
    before: pearsonSimilarityBefore,
    after: pearsonSimilarityAfter,
  },
];

function log(message) {
  // eslint-disable-next-line no-console -- benchmark output
  console.log(message);
}

function runPair({ name, before, after }, a, b) {
  return new Promise((resolve) => {
    const beforeValue = before(a, b);
    const afterValue = after(a, b);
    const identical = Object.is(beforeValue, afterValue);
    let beforeHz = 0;
    let afterHz = 0;
    let beforeRme = 0;
    let afterRme = 0;
    new Benchmark.Suite(name)
      .add('before', () => before(a, b), { maxTime: 2 })
      .add('after', () => after(a, b), { maxTime: 2 })
      .on('cycle', (event) => {
        const { name: which, hz, stats } = event.target;
        if (which === 'before') {
          beforeHz = hz;
          beforeRme = stats.rme;
        } else {
          afterHz = hz;
          afterRme = stats.rme;
        }
        log(
          `  ${which.padEnd(7)}${(1e3 / hz).toFixed(4).padStart(10)} ms/op  ±${stats.rme.toFixed(2)}%  (${stats.sample.length} samples)`,
        );
      })
      .on('complete', () => {
        const speedup = afterHz / beforeHz;
        log(
          `  => ${speedup.toFixed(2)}x   ${identical ? 'identical result' : `DIFFERS ${beforeValue} -> ${afterValue}`}\n`,
        );
        resolve({ speedup, identical, rme: Math.max(beforeRme, afterRme) });
      })
      .run({ async: false });
  });
}

const summary = [];
for (const length of LENGTHS) {
  for (const kind of KINDS) {
    const [a, b] = makeArrays(kind, length);
    log(`\n=== ${kind}, ${length} elements ===\n`);
    for (const pair of PAIRS) {
      log(pair.name);
      // eslint-disable-next-line no-await-in-loop -- suites must not overlap
      const result = await runPair(pair, a, b);
      summary.push({ ...result, name: pair.name, length, kind });
    }
  }
}

log('\n\n=== speedup summary (after / before) ===\n');
for (const kind of KINDS) {
  log(kind);
  log(
    `  ${'function'.padEnd(24)}${LENGTHS.map((l) => `${l}`.padStart(10)).join('')}`,
  );
  for (const pair of PAIRS) {
    const cells = LENGTHS.map((length) => {
      const found = summary.find(
        (entry) =>
          entry.name === pair.name &&
          entry.length === length &&
          entry.kind === kind,
      );
      return `${found.speedup.toFixed(2)}x`.padStart(10);
    });
    log(`  ${pair.name.padEnd(24)}${cells.join('')}`);
  }
  log('');
}

const differing = summary.filter((entry) => !entry.identical);
log(
  differing.length === 0
    ? 'all results identical'
    : `results differ for: ${[...new Set(differing.map((entry) => entry.name))].join(', ')}`,
);
