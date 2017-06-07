/**
 * App configuration file
 * consumes by env.js and injected into compiled code by webpack definePlugin
 * unlike .env file, this file should be committed to git
 */

const APP_CONFIG = {
  production: {
    REST_API_PATH: '/api',
    SERVER_SIDE_RENDERING: true,
    BROWSER: null // set by compiler
  },
  development: {
    REST_API_PATH: '/api',
    SERVER_SIDE_RENDERING: true,
    BROWSER: null
  }
}

export default APP_CONFIG
