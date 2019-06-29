export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.js'
  },
  external: ['ml-array-mean', 'ml-distance-euclidean', 'ml-tree-similarity']
};
