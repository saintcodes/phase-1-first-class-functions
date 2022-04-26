function receivesAFunction (fn) {
  return fn()
}

function returnsANamedFunction() {
  return function someFunc() {}
}

function returnsAnAnonymousFunction() {
  return function() {}
}