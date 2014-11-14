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

Returns the [Minkowski distance](http://en.wikipedia.org/wiki/Minkowski_distance) between vectors p and q for order d

### chebyshev(p, q)

Returns the [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance) between vectors p and q

### sorensen(p, q)

Returns the [Sørensen distance](http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient) between vectors p and q

### gower(p, q)

Returns the [Gower distance](https://stat.ethz.ch/education/semesters/ss2012/ams/slides/v4.2.pdf) between vectors p and q

### soergel(p, q)

Returns the [Soergel distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### kulczynski(p, q)

Returns the [Kulczynski distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### canberra(p, q)

Returns the [Canberra distance](http://en.wikipedia.org/wiki/Canberra_distance) between vectors p and q

### lorentzian(p, q)

Returns the [Lorentzian distance](https://stat.ethz.ch/education/semesters/ss2012/ams/slides/v4.2.pdf) between vectors p and q

### intersection(p, q)

Returns the [Intersection distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### intersectionS(p, q)

Returns the [Intersection similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### waveHedges(p, q)

Returns the [Wave Hedges distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### czekanowski(p, q)

Returns the [Czekanowski distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### czekanowskiS(p, q)

Returns the [Czekanowski similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### motyka(p, q)

Returns the [Motyka distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### motykaS(p, q)

Returns the [Motyka similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### kulczynskiS(p, q)

Returns the [Kulczynski similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### ruzicka(p, q)

Returns the [Ruzicka similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### tanimoto(p, q)

Returns the [Tanimoto distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### innerProduct(p, q)

Returns the [Inner Product similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### harmonicMean(p, q)

Returns the [Harmonic mean similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### cosine(p, q)

Returns the [Cosine similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### kumarHassebrook(p, q)

Returns the [Kumar-Hassebrook  similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### jaccard(p, q)

Returns the [Jaccard  distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### jaccardS(p, q)

Returns the [Jaccard  similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### dice(p, q)

Returns the [Dice  distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

### diceS(p, q)

Returns the [Dice  similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

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
