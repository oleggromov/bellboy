const Bellboy = require('./bellboy')
const core = require('./modules/core')
const http = require('./modules/http')

module.exports = function bellboyDefault () {
  const bellboy = new Bellboy()

  bellboy.mix('take', core.take)
  bellboy.mix('map', core.map)
  bellboy.mix('touch', core.touch)
  bellboy.mix('filter', core.filter)
  bellboy.mix('reduce', core.reduce)
  bellboy.mix('slice', core.slice)

  bellboy.mix('get', http.get)

  bellboy.mix('args', require('./plugins/args'))
  bellboy.mix('env', require('./plugins/env'))
  bellboy.mix('file', require('./plugins/file'))
  bellboy.mix('lines', require('./plugins/lines'))
  bellboy.mix('find', require('./plugins/find'))
  bellboy.mix('html', require('./plugins/html'))
  // bellboy.mix('save', require('./plugins/save'))
  // bellboy.mix('url', require('./plugins/url'))

  return bellboy
}
