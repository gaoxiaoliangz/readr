import getEnv from './getEnv'
import isServerEnv from './isServerEnv'

const env = getEnv()

export default function getApiRoot() {
  const { PORT } = env

  if (isServerEnv()) {
    return `http://localhost:${PORT}/api`
  }
  return '/api'
}
