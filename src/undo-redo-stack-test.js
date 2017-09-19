import Stack from 'ck-stack/dist/stack-test.js'
import UndoRedo from './undo-redo-stack.js'

const stack = Stack.stackTest

UndoRedo.test = () => {
  const undoStack = stack()
  const redoStack = stack()
  const undoRedo = UndoRedo(undoStack, redoStack)
  return Object.assign({}, undoRedo, {undoStack, redoStack})
}

export default UndoRedo
