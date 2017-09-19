import babel from 'rollup-plugin-babel';

export default {
  input: 'src/undo-redo-stack.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      globals: {
        'ck-stack': 'stack'
      }
    }
  ],
  external: ['ck-stack'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
