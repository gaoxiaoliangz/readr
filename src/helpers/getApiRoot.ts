import getEnv from '../context/getEnv'

const env = getEnv()

export default function getApiRoot() {
  const { PORT } = env

  if (process.env.NODE_ENV === 'production') {
    // todo: domain
    return `/api`
  }

  return `http://localhost:${PORT}/api`
}
