import appConfig from '../../app.config'

export default function getApiRoot() {
  // const host = typeof window !== 'undefined'
  //   ? window.location.origin
  //   : 'http://localhost:3000'

  const host = 'http://localhost:4001'

  return `${host}/${appConfig.api.prefix}`
}
