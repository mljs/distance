/*
 * The exponentiation operator is the reason minkowski and kumarJohnson were
 * slow. This isolates which forms of `**` an engine specializes and which fall
 * back to a generic pow call.
 *
 * Run with: node benchmark/exponentiation.js  (or: bun benchmark/exponentiation.js)
 */
import Benchmark from 'benchmark';

const LENGTH = 10000;
const values = new Float64Array(LENGTH);
let state = 42;
for (let i = 0; i < LENGTH; i++) {
  state = (state * 1103515245 + 12345) % 2147483648;
  values[i] = 0.1 + (state / 2147483648) * 2;
}

// A variable exponent, opaque to the compiler.
function exponent(value) {
  return values.length > 0 ? value : 0;
}
const variableOne = exponent(1);
const variableTwo = exponent(2);
const variableOneAndAHalf = exponent(1.5);
const variableHalf = exponent(0.5);

// `power` reaches powerCosine as a parameter with a default, not as a constant.
function poweredSum(input, power) {
  let s = 0;
  for (let i = 0; i < input.length; i++) s += input[i] ** power;
  return s;
}
function sqrtSum(input) {
  let s = 0;
  for (let i = 0; i < input.length; i++) s += Math.sqrt(input[i]);
  return s;
}

const CASES = [
  [
    'x ** 2   (literal)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** 2;
      return s;
    },
  ],
  [
    'x * x',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) {
        const v = values[i];
        s += v * v;
      }
      return s;
    },
  ],
  [
    'x ** p   (p = 2)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** variableTwo;
      return s;
    },
  ],
  [
    'x ** 1   (literal)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** 1;
      return s;
    },
  ],
  [
    'x ** p   (p = 1)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** variableOne;
      return s;
    },
  ],
  [
    'x        (identity)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i];
      return s;
    },
  ],
  [
    'x ** 0.5 (literal)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** 0.5;
      return s;
    },
  ],
  [
    'Math.sqrt(x)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += Math.sqrt(values[i]);
      return s;
    },
  ],
  [
    'x ** 1.5 (literal)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** 1.5;
      return s;
    },
  ],
  [
    'x ** p   (p = 1.5)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** variableOneAndAHalf;
      return s;
    },
  ],
  [
    'x * Math.sqrt(x)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) {
        const v = values[i];
        s += v * Math.sqrt(v);
      }
      return s;
    },
  ],
  [
    'x ** p   (p = 0.5)',
    () => {
      let s = 0;
      for (let i = 0; i < LENGTH; i++) s += values[i] ** variableHalf;
      return s;
    },
  ],
  ['x ** p   (p = 0.5 param)', () => poweredSum(values, 0.5)],
  ['Math.sqrt(x)  (in fn)', () => sqrtSum(values)],
];

function log(message) {
  // eslint-disable-next-line no-console -- benchmark output
  console.log(message);
}

const suite = new Benchmark.Suite();
for (const [name, callback] of CASES) {
  suite.add(name, callback, { maxTime: 2 });
}

const timings = new Map();
suite
  .on('cycle', (event) => {
    const { name, hz, stats } = event.target;
    const nanosecondsPerElement = 1e9 / hz / LENGTH;
    timings.set(name, nanosecondsPerElement);
    log(
      `${name.padEnd(22)}${nanosecondsPerElement.toFixed(3).padStart(8)} ns/element  ±${stats.rme.toFixed(2)}%`,
    );
  })
  .on('complete', () => {
    log('\nrelative cost (vs the multiplication-based equivalent):');
    for (const [slow, fast] of [
      ['x ** 2   (literal)', 'x * x'],
      ['x ** p   (p = 2)', 'x * x'],
      ['x ** 1   (literal)', 'x        (identity)'],
      ['x ** p   (p = 1)', 'x        (identity)'],
      ['x ** 0.5 (literal)', 'Math.sqrt(x)'],
      ['x ** p   (p = 0.5)', 'Math.sqrt(x)'],
      ['x ** p   (p = 0.5 param)', 'Math.sqrt(x)  (in fn)'],
      ['x ** 1.5 (literal)', 'x * Math.sqrt(x)'],
      ['x ** p   (p = 1.5)', 'x * Math.sqrt(x)'],
    ]) {
      log(
        `  ${slow.padEnd(22)}${(timings.get(slow) / timings.get(fast)).toFixed(2).padStart(7)}x the cost of  ${fast}`,
      );
    }
  })
  .run({ async: false });
