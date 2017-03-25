import getEnv from './getEnv'

const env = getEnv()

export default function getApiRoot() {
  const { PORT, HOST } = env

  // if (process.env.NODE_ENV !== 'production') {
  //   return `http://${HOST}:${PORT}/api`
  // }

  // todo: check if client and server env has a difference on this
  return `http://localhost:${PORT}/api`
}
