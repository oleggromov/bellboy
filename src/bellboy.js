const jsonpath = require('jsonpath')

class Bellboy {
  constructor () {
    this._context = {}
  }

  registerPlugin (name, fn) {
    this[name] = (...args) => {
      this._context[name] = fn(...args)
      return this
    }
  }

  ctx (path) {
    return jsonpath.query(this._context, path)[0]
  }
}

module.exports = Bellboy
