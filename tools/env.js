// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
// It's for client usage only, node env variables are read from .env file directly

const REACT_APP = /^READR_APP_/i

function getClientEnvironment(publicUrl) {
  const raw = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key] // eslint-disable-line
      return env
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': process.env.NODE_ENV || 'development',
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': publicUrl
    })
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = Object.keys(raw)
    .reduce((env, key) => {
      const val = JSON.stringify(raw[key])
      if (REACT_APP.test(key)) {
        env[key] = val // eslint-disable-line
      } else {
        env[`process.env.${key}`] = val // eslint-disable-line
      }
      return env
    }, {})

  console.log({ raw, stringified })

  return { raw, stringified }
}

export default getClientEnvironment
