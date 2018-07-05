module.exports = function find (terms, lines) {
  return lines.filter(line => {
    for (let i = 0; i < terms.length; i++) {
      if (line.match(terms[i])) {
        return true
      }
    }
    return false
  })
}
