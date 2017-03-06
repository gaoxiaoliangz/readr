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
  siteName: 'readr',
  apiPort: 4001,
  assetsPort: 4000,
  pagesPort: 4002,
  enableEntityCache: true
}

export default appConfig
