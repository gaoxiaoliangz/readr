import appConfigDev from './app.config.dev'
import appConfigProd from './app.config.prod'

let appConfig = appConfigDev

if (process.env.NODE_ENV === 'production') {
  appConfig = appConfigProd
}

export default appConfig
