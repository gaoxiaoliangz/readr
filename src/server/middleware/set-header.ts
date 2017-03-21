const { PORT, API_HOST, WEBPACK_PORT } = process.env

const LOCALHOST = 'localhost'

const makeOrigin = (host, port?) => {
  if (port) {
    return `http://${host}:${port}`
  }
  return `http://${host}`
}

const ALLOWED_ORIGINS = [
  // for production, using domain
  makeOrigin(API_HOST),
  makeOrigin(LOCALHOST, PORT),
  makeOrigin(LOCALHOST, WEBPACK_PORT)
]

const setHeader = (req, res, next) => {
  const origin = req.headers.origin

  if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    // todo: CORS preflight needs this, but can it be other values?
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
  }
  next()
}

export default setHeader
