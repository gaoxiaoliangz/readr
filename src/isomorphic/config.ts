export const HOST = typeof window !== 'undefined'
  ? window.location.origin
  : 'http://localhost:3000'

export const ApiRoots = {
  LOCAL: `${HOST}/api/`,
  DOUBAN_BOOKS: 'https://api.douban.com/v2/book/'
}
