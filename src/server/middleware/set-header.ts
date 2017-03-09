const { API_HOST, API_PORT, MAIN_HOST, MAIN_PORT, WEBPACK_HOST, WEBPACK_PORT } = process.env

const makeOrigin = (host, port) => {
  return `http://${host}:${port}`
}

const ALLOWED_ORIGINS = [
  makeOrigin(API_HOST, API_PORT),
  makeOrigin(MAIN_HOST, MAIN_PORT),
  makeOrigin(WEBPACK_HOST, WEBPACK_PORT)
]

const setHeader = (req, res, next) => {
  const origin = req.headers.origin
  if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
}

export default setHeader
