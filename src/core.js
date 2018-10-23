function _convertToArray(value) {
  return Array.isArray(value) ? value : [value]
}

function map (fn, value) {
  return _convertToArray(value).map(fn)
}

function filter (fn, value) {
  return _convertToArray(value).filter(fn)
}

function reduce (fn, value, ...rest) {
  return _convertToArray(value).reduce(fn, ...rest)
}

function take (value) {
  return value
}

module.exports = { take, map, filter, reduce }
