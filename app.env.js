/**
 * App env file
 * 
 * consumes by tools/env.js and injected into compiled code by webpack definePlugin
 * take effect after compilation
 * 
 * # Why this file?
 * 
 * We already hava .env right? But as you can see, entries in .env can be both set within
 * the file itself or from command line, or even some other ways, and these properties work
 * immediately after the server is restarted, no compilation is required. But some entries
 * are needed by the client side, which is compiled into JavaScript code, thus cannot be updated
 * like those needed by nodejs the server side. So while some of them take effect with a server
 * restart and some need recompilation, this will lead to confusion and errors.
 * 
 * Why not just use constants defined inside src like other modules? Or injected into page via
 * script tag? These two approaches are very similar. Both work like a module, you can import
 * then get its value something. The latter even take effect after reboot like .env, but less
 * secure than any other approach. The reason is simple, I just don't want to bother import these
 * env modules when I just want a property as I could otherwise use simply like `APP_ENV.BROWSER`.
 */

const APP_ENV = {
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

export default APP_ENV
