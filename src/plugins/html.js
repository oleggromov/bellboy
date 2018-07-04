const cheerio = require('cheerio')

module.exports = function html (source, cb) {
  return cb(cheerio.load(source))
}
