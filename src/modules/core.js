function _convertToArray(value) {
  return Array.isArray(value) ? value : [value]
}

function map (fn, value) {
  return _convertToArray(value).map(fn)
}

function touch (fn, value) {
  map(fn, value)
  return value
}

function filter (fn, value) {
  return _convertToArray(value).filter(fn)
}

function reduce (fn, acc, value) {
  return _convertToArray(value).reduce(fn, acc)
}

function take (value) {
  return value
}

function slice (begin, end, value) {
  return _convertToArray(value).slice(begin, end)
}

module.exports = { take, map, touch, filter, reduce, slice }
