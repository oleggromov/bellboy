const Bellboy = require('./bellboy')
const args = require('./plugins/args')
const file = require('./plugins/file')
const lines = require('./plugins/lines')

module.exports = function bellboyDefault () {
  const bellboy = new Bellboy()

  bellboy.registerPlugin('args', args)
  bellboy.registerPlugin('file', file)
  bellboy.registerPlugin('lines', lines)

  return bellboy
}
