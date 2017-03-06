// todo
const ALLOWED_ORIGINS = [
  'http://localhost:4000',
  'http://localhost:4001',
  'http://localhost:4002',
]

const setHeader = (req, res, next) => {
  const origin = req.headers.origin
  if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
}

export default setHeader
