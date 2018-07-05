const Bellboy = require('./bellboy')

module.exports = function bellboyDefault () {
  const bellboy = new Bellboy()

  bellboy.mix('args', require('./plugins/args'))
  bellboy.mix('env', require('./plugins/env'))
  bellboy.mix('file', require('./plugins/file'))
  bellboy.mix('lines', require('./plugins/lines'))
  bellboy.mix('find', require('./plugins/find'))
  bellboy.mix('html', require('./plugins/html'))
  // bellboy.mix('save', require('./plugins/save'))
  bellboy.mix('url', require('./plugins/url'))

  return bellboy
}
