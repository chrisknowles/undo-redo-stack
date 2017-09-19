# Undo Redo Stack

A module for storing data updates in an undo/redo style.

## Usage

```
$ npm install undo-redo-stack --save
```

```javascript
import undoRedo from 'undo-redo-stack'

const history = undoRedo()
```

```javascript
<script type='text/javascript' src='/dist/undo-redo-stack.js'></script>
<script type='text/javascript' src='/dist/undo-redo-stack.min.js'></script>

const history = UndoRedo()
```

```javascript
history.push(1)
history.push(2)

history.getValues()
// => {redo: [], undo: [1,2]}

history.undo()
// => {redo: [2], undo: [1]}

history.latest()
// => 1

history.redo()
// => {redo: [], undo: [1,2]}

history.clear()
// => {redo: [], undo: []}
```

## Tests

```
$ npm run test
```

## License

MIT - see LICENSE.md
