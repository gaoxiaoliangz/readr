import getEnv from './getEnv'

const env = getEnv()

export default function getApiRoot() {
  const { PORT } = env

  // todo: check if client and server env has a difference on this
  return `http://localhost:${PORT}/api`
}
