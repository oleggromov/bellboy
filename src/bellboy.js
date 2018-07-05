class Bellboy {
  constructor () {
    this._queue = []
    this._then = () => {}
    this._catch = err => { throw err }
  }

  mix (name, fn) {
    this[name] = (...args) => {
      this._queue.push(fn.bind(undefined, ...args))
      return this
    }
  }

  then (fn) {
    this._then = fn.bind(undefined)
    return this
  }

  catch (fn) {
    this._catch = fn.bind(undefined)
    return this
  }

  please () {
    this._next()
  }

  _next () {
    const next = this._queue.shift()
    if (next) {
      try {
        this._last = next(this._last)
      } catch (err) {
        this._catch(err)
      }

      if (this._last instanceof Promise) {
        this._last
          .then(result => {
            this._last = result
            this._next()
          })
          .catch(err => this._catch(err))
      } else {
        this._next()
      }
    } else {
      this._then(this._last)
    }
  }
}

module.exports = Bellboy
