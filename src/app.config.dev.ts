const appConfig: AppConfig = {
  api: {
    prefix: 'api'
  },
  database: {
    host: 'mongodb://localhost:27017',
    name: 'readr',
    mongoStoreName: 'readr_session'
  },
  siteUrl: 'http://readrweb.com',
  port: 3000,
  enableEntityCache: false
}

export default appConfig
