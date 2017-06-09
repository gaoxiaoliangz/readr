const { PORT, WEBPACK_PORT } = process.env

const LOCALHOST = 'localhost'

export const makeOrigin = (host, port?) => {
  if (port) {
    return `http://${host}:${port}`
  }
  return `http://${host}`
}

const ALLOWED_ORIGINS = [
  makeOrigin(LOCALHOST, PORT),
  ...(process.env.NODE_ENV === 'production') ? [] : [makeOrigin(LOCALHOST, WEBPACK_PORT)]
]

export default ALLOWED_ORIGINS
