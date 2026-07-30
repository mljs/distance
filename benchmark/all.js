/*
 * Benchmarks every distance and similarity function so their relative cost can
 * be compared. Use beforeAfter.js instead to compare two implementations of the
 * same function.
 *
 * Run with: node benchmark/all.js  (or: bun benchmark/all.js)
 */
import Benchmark from 'benchmark';

import { distance, similarity } from '../src/index.ts';

const LENGTH = 10000;

function makeVector(seed) {
  const vector = new Float64Array(LENGTH);
  let state = seed;
  for (let i = 0; i < LENGTH; i++) {
    state = (state * 1103515245 + 12345) % 2147483648;
    vector[i] = 0.1 + (state / 2147483648) * 2;
  }
  return vector;
}

const a = makeVector(42);
const b = makeVector(1337);

const entries = [];
for (const [namespace, functions] of [
  ['distance', distance],
  ['similarity', similarity],
]) {
  for (const [name, callback] of Object.entries(functions)) {
    if (typeof callback !== 'function') continue;
    if (name === 'minkowski') {
      for (const p of [1, 2, 3]) {
        entries.push([
          `${namespace}.${name}(p=${p})`,
          (x, y) => callback(x, y, p),
        ]);
      }
      continue;
    }
    entries.push([`${namespace}.${name}`, callback]);
  }
}

function log(message) {
  // eslint-disable-next-line no-console -- benchmark output
  console.log(message);
}

const results = [];
const suite = new Benchmark.Suite();
for (const [name, callback] of entries) {
  suite.add(name, () => callback(a, b), { minSamples: 30 });
}

suite
  .on('cycle', (event) => {
    const { name, hz, stats } = event.target;
    results.push({
      name,
      nanoseconds: 1e9 / hz,
      rme: stats.rme,
      samples: stats.sample.length,
    });
  })
  .on('complete', () => {
    results.sort((first, second) => second.nanoseconds - first.nanoseconds);
    log(`\nn = ${LENGTH}, sorted slowest first\n`);
    log(
      `${'function'.padEnd(32)}${'per call'.padStart(12)}${'per element'.padStart(14)}${'error'.padStart(9)}   result`,
    );
    const values = new Map(entries.map(([name, callback]) => [name, callback]));
    for (const { name, nanoseconds, rme } of results) {
      // A wide confidence interval means the engine kept re-tiering this one;
      // treat the number as indicative only.
      const flag = rme > 10 ? ' (!)' : '';
      log(
        `${name.padEnd(32)}${`${(nanoseconds / 1000).toFixed(1)} µs`.padStart(12)}${`${(nanoseconds / LENGTH).toFixed(2)} ns`.padStart(14)}${`±${rme.toFixed(1)}%${flag}`.padStart(13)}   ${values.get(name)(a, b)}`,
      );
    }
  })
  .run({ async: false });
