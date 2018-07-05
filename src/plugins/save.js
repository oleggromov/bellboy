const fs = require('fs')

module.exports = function save (filename, content) {
  fs.writeFileSync(filename, content, { encoding: 'utf8' })
  return true
}
