import { distance } from '../..';

let v1 = [0.2, 0.4, 0.3, 0.1];
let v2 = [0.3, 0.2, 0.3, 0.2];

describe('Wave Hedges distance', () => {
  it('should return 0 with itself', () => {
    expect(distance.waveHedges(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(distance.waveHedges(v1, v2)).toBe(4 / 3);
  });
});
