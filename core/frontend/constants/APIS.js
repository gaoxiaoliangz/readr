const VERSION = 'v0.1'
let HOST = 'http://localhost:3000'

if(typeof window !== 'undefined') {
  HOST = window.location.origin
}

export const API_ROOT = `${HOST}/api/${VERSION}/`
export const API_DOUBAN_BOOKS = 'https://api.douban.com/v2/book/'
