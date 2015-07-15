# ml-distance

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

Distance functions to compare vectors

## Installation

`$ npm install ml-distance`

## Methods

### Distances

* `euclidean(p, q)`

Returns the [euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance#n_dimensions) between vectors p and q

* `manhattan(p, q)`

Returns the [city block distance](http://en.wikipedia.org/wiki/Taxicab_geometry) between vectors p and q

* `minkowski(p, q, d)`

Returns the [Minkowski distance](http://en.wikipedia.org/wiki/Minkowski_distance) between vectors p and q for order d

* `chebyshev(p, q)`

Returns the [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance) between vectors p and q

* `sorensen(p, q)`

Returns the [Sørensen distance](http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient) between vectors p and q

* `gower(p, q)`

Returns the [Gower distance](https://stat.ethz.ch/education/semesters/ss2012/ams/slides/v4.2.pdf) between vectors p and q

* `soergel(p, q)`

Returns the [Soergel distance](http://www.orgchm.bas.bg/~vmonev/SimSearch.pdf) between vectors p and q

* `kulczynski(p, q)`

Returns the [Kulczynski distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `canberra(p, q)`

Returns the [Canberra distance](http://en.wikipedia.org/wiki/Canberra_distance) between vectors p and q

* `lorentzian(p, q)`

Returns the [Lorentzian distance](https://stat.ethz.ch/education/semesters/ss2012/ams/slides/v4.2.pdf) between vectors p and q

* `intersection(p, q)`

Returns the [Intersection distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `waveHedges(p, q)`

Returns the [Wave Hedges distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `czekanowski(p, q)`

Returns the [Czekanowski distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `motyka(p, q)`

Returns the [Motyka distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `ruzicka(p, q)`

Returns the [Ruzicka similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `tanimoto(p, q, [bitVector])`

Returns the [Tanimoto distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q, and accepts the bitVector use, see the test case for an example

* `innerProduct(p, q)`

Returns the [Inner Product similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `harmonicMean(p, q)`

Returns the [Harmonic mean similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `cosine(p, q)`

Returns the [Cosine similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `kumarHassebrook(p, q)`

Returns the [Kumar-Hassebrook similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `jaccard(p, q)`

Returns the [Jaccard distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `dice(p, q)`

Returns the [Dice distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `fidelity(p, q)`

Returns the [Fidelity similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `bhattacharyya(p, q)`

Returns the [Bhattacharyya distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `hellinger(p, q)`

Returns the [Hellinger distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `matusita(p, q)`

Returns the [Matusita distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `squaredChord(p, q)`

Returns the [Squared-chord distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `squaredEuclidean(p, q)`

Returns the [squared euclidean distance](http://en.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance) between vectors p and q

* `pearson(p, q)`

Returns the [Pearson distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `neyman(p, q)`

Returns the [Neyman distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `squared(p, q)`

Returns the [Squared distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `probabilisticSymmetric(p, q)`

Returns the [Probabilistic Symmetric distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `divergence(p, q)`

Returns the [Divergence distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `clark(p, q)`

Returns the [Clark distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `additiveSymmetric(p, q)`

Returns the [Additive Symmetric distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `kullbackLeibler(p, q)`

Returns the [Kullback-Leibler distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `jeffreys(p, q)`

Returns the [Jeffreys distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `kdivergence(p, q)`

Returns the [K divergence distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `topsoe(p, q)`

Returns the [Topsøe distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `jensenShannon(p, q)`

Returns the [Jensen-Shannon distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `jensenDifference(p, q)`

Returns the [Jensen difference distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `taneja(p, q)`

Returns the [Taneja distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `kumarJohnson(p, q)`

Returns the [Kumar-Johnson distance](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `avg(p, q)`

Returns the average of city block and Chebyshev distances between vectors p and q


### Similarities

* `intersection(p, q)`

Returns the [Intersection similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `czekanowski(p, q)`

Returns the [Czekanowski similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `motyka(p, q)`

Returns the [Motyka similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `kulczynski(p, q)`

Returns the [Kulczynski similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `squaredChord(p, q)`

Returns the [Squared-chord similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `jaccard(p, q)`

Returns the [Jaccard similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `dice(p, q)`

Returns the [Dice similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q

* `tanimoto(p, q, [bitVector])`

Returns the [Tanimoto similarity](http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf) between vectors p and q, and accepts the bitVector use, see the test case for an example

* `tree(a,b, from, to, [options])`

Refer to [ml-tree-similarity](https://github.com/mljs/tree-similarity)

## Contributing

A new metric should normally be in its own file in the src/dist directory. There should be a corresponding test file in test/dist.  
The metric should be then added in the exports of src/index.js with a relatively small but understandable name (use camelCase).  
It should also be added to this README with either a link to the formula or an inline description.

## Test

```js
$ npm install
$ npm test
```

## Authors

  - [Michaël Zasso](https://github.com/targos)
  - [Miguel Angel Asencio Hurtado](https://github.com/maasencioh)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-distance.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-distance
[travis-image]: https://img.shields.io/travis/mljs/distance/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/distance
[david-image]: https://img.shields.io/david/mljs/distance.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/distance
[download-image]: https://img.shields.io/npm/dm/ml-distance.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-distance
