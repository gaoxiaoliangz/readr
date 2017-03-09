import getEnv from '../../context/getEnv'

const env = getEnv()

export default function getApiRoot() {
  const { API_HOST, API_PORT, API_PREFIX } = env

  return `http://${API_HOST}:${API_PORT}/${API_PREFIX}`
}
