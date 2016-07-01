const HOST = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'

const ApiRoots = {
  LOCAL: `${HOST}/api/`,
  DOUBAN_BOOKS: 'https://api.douban.com/v2/book/'
}

export default ApiRoots
