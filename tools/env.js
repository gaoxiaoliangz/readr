// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
// It's for client usage only, node env variables are read from .env file directly

import APP_CONFIG from '../app.config'

function getClientEnvironment(isDebug, isBrowser) {
  const raw = {
    ...isDebug ? APP_CONFIG.development : APP_CONFIG.production,
    BROWSER: isBrowser
  }

  if (isBrowser) {
    raw['process.env.NODE_ENV'] = isDebug ? 'development' : 'production'
  }

  const stringified = {
    APP_CONFIG: Object.keys(raw)
      .reduce((config, key) => {
        config[key] = JSON.stringify(raw[key]) // eslint-disable-line
        return config
      }, {})
  }

  return { raw, stringified }
}

export default getClientEnvironment
