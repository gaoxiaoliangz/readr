const debug = require('debug')('readr:setHeader')

const cors = (allowedOrigins: string[]) => (req, res, next) => {
  const origin = req.headers.origin

  if (allowedOrigins.indexOf(origin) !== -1) {
    debug(`set allowed origin: ${origin}`)
    res.setHeader('Access-Control-Allow-Origin', origin)
    // todo: CORS preflight needs this, but can it be other values?
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
  } else {
    debug(`not allowed origin: ${origin}`)
  }
  next()
}

export default cors
