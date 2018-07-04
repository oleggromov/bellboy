const argv = require('yargs').argv

module.exports = function args (supported) {
  return supported.reduce((acc, arg) => {
    if (typeof argv[arg] !== 'undefined') {
      acc[arg] = argv[arg]
    }
    return acc
  }, {})
}
