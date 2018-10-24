const request = require('request')
const os = require('os')
const fs = require('fs')

function getCacheFilename(url) {
  const sanitized = url.replace(/[^\w\d]/g, '-')
  return `${os.tmpdir()}/bellboy-http-cache-${sanitized}`
}

function getFromCache(url) {
  try {
    const cached = fs.readFileSync(getCacheFilename(url))
    return JSON.parse(cached)
  } catch (_) {}

  return null
}

function saveToCache(url, result) {
  const tempfile = getCacheFilename(url)
  const cached = Object.assign({ timestamp: Date.now() }, result)

  fs.writeFileSync(tempfile, JSON.stringify(cached))
}

async function get(url, options = {}) {
  return new Promise((resolve, reject) => {
    if (options.cacheFor) {
      const cached = getFromCache(url)

      if (cached) {
        if (Date.now() - cached.timestamp < options.cacheFor) {
          resolve(Object.assign({ fromCache: true }, cached))
          return
        }
      }
    }

    request({ url }, (error, res, body) => {
      if (error) {
        reject(error)
      } else if (res.statusCode !== 200) {
        reject(new Error(`Response statusCode: ${res.statusCode}`))
      } else {
        const result = { statusCode: res.statusCode, body }

        if (options.cacheFor) {
          saveToCache(url, result)
        }

        resolve(result)
      }
    })
  })
}

module.exports = { get }
