/**
 * An undo/redo history manager implemented as two stacks
 */
import stack from 'ck-stack'

const push = undoStack => val =>
  undoStack.push(val)

const undo = (undoStack, redoStack) => () => {
  if (!undoStack.isEmpty()) {
    redoStack.push(undoStack.pop())
  }
}

const redo = (undoStack, redoStack) => () => {
  if (!redoStack.isEmpty()) {
    undoStack.push(redoStack.pop())
  }
}

const clear = (undoStack, redoStack) => () => {
  undoStack.clear()
  redoStack.clear()
}

const  latest = (undoStack) => () =>
  undoStack.current()

const getValues = (undoStack, redoStack) => () => ({
    undo: undoStack.getValues()
  , redo: redoStack.getValues()
})

function main(undoStack, redoStack) {
  return {
      push: push(undoStack)
    , undo: undo(undoStack, redoStack)
    , redo: redo(undoStack, redoStack)
    , clear: clear(undoStack, redoStack)
    , latest: latest(undoStack)
    , getValues: getValues(undoStack, redoStack)
  }
}

function undoRedo(undoStack = false, redoStack = false) {
  return undoStack && redoStack
    ? main(undoStack, redoStack)
    : main(stack(), stack())
}

export default undoRedo
