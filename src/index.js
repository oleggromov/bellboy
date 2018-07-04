const Bellboy = require('./bellboy')

module.exports = function bellboyDefault () {
  const bellboy = new Bellboy()

  bellboy.registerPlugin('args', require('./plugins/args'))
  bellboy.registerPlugin('env', require('./plugins/env'))
  bellboy.registerPlugin('file', require('./plugins/file'))
  bellboy.registerPlugin('lines', require('./plugins/lines'))
  bellboy.registerPlugin('find', require('./plugins/find'))
  bellboy.registerPlugin('html', require('./plugins/html'))
  bellboy.registerPlugin('save', require('./plugins/save'))

  return bellboy
}
