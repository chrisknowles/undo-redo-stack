import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/undo-redo-stack.js',
  output: [
    {
      file: 'dist/undo-redo-stack.js',
      name: 'UndoRedoStack',
      format: 'umd',
      globals: {
        'ck-stack': 'stack'
      }
    }
  ],
  plugins: [
    resolve({
      module: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
