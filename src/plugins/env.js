module.exports = function env (requested) {
  return requested.reduce((acc, variable) => {
    if (process.env[variable]) {
      acc[variable] = process.env[variable]
    }
    return acc
  }, {})
}
