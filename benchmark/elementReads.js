/*
 * Why does caching `a[i]` in a local help at all?
 *
 * Not because of the `NumberArray` TypeScript type: types are erased and V8
 * never sees them. What matters is the element representation the load site
 * actually observes at run time. On a site that has only ever seen one
 * Float64Array shape, V8 eliminates the repeated loads by itself and the
 * caching is worth nothing. On plain arrays, or on a site fed more than one
 * array kind, the loads survive and the caching pays.
 *
 * Run with: node benchmark/elementReads.js  (or: bun benchmark/elementReads.js)
 */
import Benchmark from 'benchmark';

const LENGTH = 10000;

function fill(target) {
  let state = 42;
  for (let i = 0; i < target.length; i++) {
    state = (state * 1103515245 + 12345) % 2147483648;
    target[i] = 0.1 + (state / 2147483648) * 2;
  }
  return target;
}

const typedA = fill(new Float64Array(LENGTH));
const typedB = fill(new Float64Array(LENGTH));
const plainA = fill(Array.from({ length: LENGTH }, () => 0));
const plainB = fill(Array.from({ length: LENGTH }, () => 0));

/*
 * Six copies of the same two loops. They must not be shared: a single copy
 * called with several array kinds would make every measurement polymorphic,
 * which is exactly the variable under test.
 */
function typedBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / (a[i] + b[i]);
  }
  return d;
}
function typedAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    d += (diff * diff) / (ai + bi);
  }
  return d;
}
function plainBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / (a[i] + b[i]);
  }
  return d;
}
function plainAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    d += (diff * diff) / (ai + bi);
  }
  return d;
}
function mixedBefore(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += ((a[i] - b[i]) * (a[i] - b[i])) / (a[i] + b[i]);
  }
  return d;
}
function mixedAfter(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const diff = ai - bi;
    d += (diff * diff) / (ai + bi);
  }
  return d;
}

for (let i = 0; i < 5000; i++) {
  typedBefore(typedA, typedB);
  typedAfter(typedA, typedB);
  plainBefore(plainA, plainB);
  plainAfter(plainA, plainB);
  mixedBefore(typedA, typedB);
  mixedBefore(plainA, plainB);
  mixedAfter(typedA, typedB);
  mixedAfter(plainA, plainB);
}

function log(message) {
  // eslint-disable-next-line no-console -- benchmark output
  console.log(message);
}

const times = new Map();
new Benchmark.Suite()
  .add('Float64Array only  before', () => typedBefore(typedA, typedB), {
    minSamples: 30,
  })
  .add('Float64Array only  after', () => typedAfter(typedA, typedB), {
    minSamples: 30,
  })
  .add('Array only         before', () => plainBefore(plainA, plainB), {
    minSamples: 30,
  })
  .add('Array only         after', () => plainAfter(plainA, plainB), {
    minSamples: 30,
  })
  .add('both kinds         before', () => mixedBefore(typedA, typedB), {
    minSamples: 30,
  })
  .add('both kinds         after', () => mixedAfter(typedA, typedB), {
    minSamples: 30,
  })
  .on('cycle', (event) => {
    const { name, hz, stats } = event.target;
    times.set(name, 1e9 / hz / LENGTH);
    log(
      `${name.padEnd(28)}${(1e9 / hz / LENGTH).toFixed(2).padStart(7)} ns/element  ±${stats.rme.toFixed(1)}%`,
    );
  })
  .on('complete', () => {
    log('\ngain from caching the element reads:');
    for (const [label, before, after] of [
      [
        'Float64Array only',
        'Float64Array only  before',
        'Float64Array only  after',
      ],
      [
        'Array only       ',
        'Array only         before',
        'Array only         after',
      ],
      [
        'both kinds       ',
        'both kinds         before',
        'both kinds         after',
      ],
    ]) {
      log(`  ${label}  ${(times.get(before) / times.get(after)).toFixed(2)}x`);
    }
  })
  .run({ async: false });
