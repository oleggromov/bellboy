const request = require('request')

module.exports = function url (uri) {
  return new Promise((resolve, reject) => request(uri, (error, res, body) => {
    if (error) {
      reject(error)
    } else {
      resolve(body)
    }
  }))
}
