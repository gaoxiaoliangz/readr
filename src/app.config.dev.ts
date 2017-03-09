const appConfig: AppConfig = {
  api: {
    prefix: 'api'
  },
  database: {
    host: 'mongodb://localhost:27017',
    name: 'readr',
    mongoStoreName: 'readr_session'
  },
  siteUrl: 'http://localhost',
  siteName: 'readr',
  apiPort: 3091,
  assetsPort: 3090,
  pagesPort: 3000,
  enableEntityCache: false
}

export default appConfig
