import { XSadd } from 'ml-xsadd';

/**
 * Builds a reproducible vector of pseudo-random values in [-1, 1).
 * @param seed - Seed of the pseudo-random number generator.
 * @param length - Number of elements.
 * @returns The generated vector.
 */
export function makeVector(seed: number, length = 50): Float64Array {
  const generator = new XSadd(seed);
  const vector = new Float64Array(length);
  for (let i = 0; i < length; i++) {
    vector[i] = generator.getFloat() * 2 - 1;
  }
  return vector;
}
