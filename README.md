# ml-distance

Distance functions to compare vectors

## Installation

```js
$ npm install ml-distance
```

## Methods

### euclidean(p, q)

Returns the [euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance#n_dimensions) between vectors p and q

### squaredEuclidean(p, q)

Returns the [squared euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance) between vectors p and q

### manhattan(p, q)

Returns the [city block distance](http://en.wikipedia.org/wiki/Taxicab_geometry) between vectors p and q

### minkowski(p, q, d)

Returns the [Minkowski](http://en.wikipedia.org/wiki/Minkowski_distance) between vectors p and q for order d

## Contributing

A new metric should normally be in its own file in the src/dist directory. There should be a corresponding test file in test/dist.  
The metric should be then added in the exports of src/index.js with a relatively small but understandable name (use camelCase).  
It should also be added to this README with either a link to the formula or an inline description.

## Test

```js
$ npm install
$ npm test
```

## License

  MIT
