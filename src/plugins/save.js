const fs = require('fs')

module.exports = function save (content, filename) {
  fs.writeFileSync(filename, content, { encoding: 'utf8' })
  return true
}
