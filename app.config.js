/**
 * App configuration file
 * consumes by env.js and injected into compiled code by webpack definePlugin
 * unlike .env file, this file should be committed to git
 */

const APP_CONFIG = {
  production: {
    APP_NAME: 'Readr',
    APP_DESC: 'A reading app',
    SITE_URL: 'http://readrweb.com/',
    REST_API_PATH: '/api',
    SERVER_SIDE_RENDERING: true,
    BROWSER: null, // set by compiler
    ENABLE_ENTITY_CACHE: true
  },
  development: {
    APP_NAME: 'Readr',
    APP_DESC: 'A reading app',
    SITE_URL: 'http://localhost:4002/',
    REST_API_PATH: '/api',
    SERVER_SIDE_RENDERING: true,
    BROWSER: null,
    ENABLE_ENTITY_CACHE: false
  }
}

export default APP_CONFIG
