import getEnv from './getEnv'
const env = getEnv()
import isServerEnv from './isServerEnv'

export default function getApiRoot() {
  const { PORT } = env

  // if (process.env.NODE_ENV === 'production') {
  //   return '/api'
  // }

  // // todo: check if client and server env has a difference on this
  // return `http://localhost:${PORT}/api`
  if (isServerEnv()) {
    return `http://localhost:${PORT}/api`
  }
  return `http://localhost:8090/api`
  // return '/api'
}

