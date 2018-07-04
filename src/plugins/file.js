const fs = require('fs')

module.exports = function file (filename) {
  return fs.readFileSync(filename, { encoding: 'utf8' })
}
