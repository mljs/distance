import { distance } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('matusita similarity', () => {
  it('should be correct', () => {
    expect(distance.matusita(v1, v2)).toBe(0.24814091564977162);
  });
});
