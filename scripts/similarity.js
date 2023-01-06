import { distance } from '../src';

let results = [];

let v1 = [0.4, 0.6];
let v2 = [4, 6];
let v3 = [0.3, 0.7];
let v4 = [3, 7];
let v5 = [1, 0];
let v6 = [0, 1];
// let v7 = [10, 0];
// let v8 = [0, 10];
let v9 = [1, 5];
let v10 = [-0.4, 0.4];
let v11 = [-0.6, 0.7];

for (let algorithm in distance) {
  if (algorithm.match(/fidelity|harmonicMean|innerProduct|ruzicka/)) continue;
  if (algorithm.match(/minkowski/)) {
    if (algorithm.match(/motyka/)) continue;
  } // does not give a 0 with identical vector
  let result = { algorithm };
  let callback = distance[algorithm];
  result.self = callback(v1, v1);
  result.different = callback(v5, v6);
  result.commutable = callback(v1, v2) === callback(v2, v1);
  result.allowZeroDiff =
    callback(v5, v9).isNaN &&
    callback(v5, v9) !== Infinity &&
    callback(v5, v9) > 0;
  result.allowNegativeNumbers =
    callback(v10, v11).isNaN &&
    callback(v1, v11) !== Infinity &&
    callback(v1, v11) > 0;
  result.scaleInsensitive = callback(v1, v3) === callback(v2, v4);
  results.push(result);
}

results = results.filter((result) => result.commutable && result.allowZeroDiff);
