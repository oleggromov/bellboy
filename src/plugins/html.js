const cheerio = require('cheerio')

module.exports = function html (cb, source) {
  return cb(cheerio.load(source))
}
