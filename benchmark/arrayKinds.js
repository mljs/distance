/*
 * Cost of `(ai * bi) / (ai + bi)` depending on the element representation.
 * One kind per process, so the loads stay monomorphic.
 *
 * `cached` copies `x[i]` into a local, `direct` reads it on every use.
 *
 * Run with: node benchmark/arrayKinds.js <array|typed|mixed> <cached|direct>
 */
import { argv } from 'node:process';

const LENGTH = 10000;
const WARMUP_MS = 1000;
const TARGET_MS = 2000; // keep at 1000 or more, shorter runs are too noisy

const kind = argv[2] ?? 'typed';
const reads = argv[3] ?? 'cached';

function fill(target) {
  let state = 42;
  for (let i = 0; i < target.length; i++) {
    state = (state * 1103515245 + 12345) % 2147483648;
    target[i] = 0.1 + (state / 2147483648) * 2;
  }
  return target;
}

function plainVector() {
  return fill(Array.from({ length: LENGTH }, () => 0));
}

function typedVector() {
  return fill(new Float64Array(LENGTH));
}

let a;
let b;
if (kind === 'array') {
  a = plainVector();
  b = plainVector();
} else if (kind === 'typed') {
  a = typedVector();
  b = typedVector();
} else if (kind === 'mixed') {
  a = typedVector();
  b = plainVector();
} else {
  throw new Error(`unknown kind: ${kind}`);
}

function cachedKernel(x, y) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    const xi = x[i];
    const yi = y[i];
    sum += (xi * yi) / (xi + yi);
  }
  return sum;
}

function directKernel(x, y) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += (x[i] * y[i]) / (x[i] + y[i]);
  }
  return sum;
}

const kernel = reads === 'cached' ? cachedKernel : directKernel;

let sink = 0;
// the arguments are swapped after each call, so `mixed` really sees both orders
let x = a;
let y = b;

let start = performance.now();
while (performance.now() - start < WARMUP_MS) {
  sink += kernel(x, y);
  [x, y] = [y, x];
}

let rounds = 0;
let elapsed = 0;
start = performance.now();
while (elapsed < TARGET_MS) {
  sink += kernel(x, y);
  [x, y] = [y, x];
  rounds++;
  elapsed = performance.now() - start;
}

// keeps the loop from being dropped as dead code
if (!Number.isFinite(sink)) throw new Error('kernel diverged');

const operationsPerSecond = (rounds * LENGTH * 1000) / elapsed;
// eslint-disable-next-line no-console -- benchmark output
console.log(
  [
    kind,
    reads,
    operationsPerSecond.toFixed(0),
    LENGTH,
    kernel(a, b).toFixed(10),
    kernel(b, a).toFixed(10),
  ].join('\t'),
);
