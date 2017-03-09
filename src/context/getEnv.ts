import isServerEnv from '../isomorphic/helpers/isServerEnv'

const GLOBAL_ENV_VAR = '__ENV__'

const getEnv = () => {
  if (isServerEnv()) {
    return process.env
  }

  return window[GLOBAL_ENV_VAR]
}

export default getEnv
