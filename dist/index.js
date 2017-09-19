'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stack = _interopDefault(require('ck-stack'));

/**
 * An undo/redo history manager implemented as two stacks
 */
var push = function push(undoStack) {
  return function (val) {
    return undoStack.push(val);
  };
};

var undo = function undo(undoStack, redoStack) {
  return function () {
    if (!undoStack.isEmpty()) {
      redoStack.push(undoStack.pop());
    }
  };
};

var redo = function redo(undoStack, redoStack) {
  return function () {
    if (!redoStack.isEmpty()) {
      undoStack.push(redoStack.pop());
    }
  };
};

var clear = function clear(undoStack, redoStack) {
  return function () {
    undoStack.clear();
    redoStack.clear();
  };
};

var latest = function latest(undoStack) {
  return function () {
    return undoStack.current();
  };
};

var getValues = function getValues(undoStack, redoStack) {
  return function () {
    return {
      undo: undoStack.getValues(),
      redo: redoStack.getValues()
    };
  };
};

function main(undoStack, redoStack) {
  return {
    push: push(undoStack),
    undo: undo(undoStack, redoStack),
    redo: redo(undoStack, redoStack),
    clear: clear(undoStack, redoStack),
    latest: latest(undoStack),
    getValues: getValues(undoStack, redoStack)
  };
}

function undoRedo() {
  var undoStack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var redoStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return undoStack && redoStack ? main(undoStack, redoStack) : main(stack(), stack());
}

module.exports = undoRedo;
