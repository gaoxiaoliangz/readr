const { PORT, API_HOST, WEBPACK_PORT } = process.env

const LOCALHOST = 'localhost'

export const makeOrigin = (host, port?) => {
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

export default ALLOWED_ORIGINS
