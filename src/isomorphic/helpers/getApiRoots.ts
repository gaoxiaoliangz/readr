import config from '../config'

export default function getApiRoots() {
  const host = typeof window !== 'undefined'
    ? window.location.origin
    : 'http://localhost:3000'

  return {
    local: `${host}/${config.api.prefix}`,
    douban: config.vendorApi.douban
  }
}
