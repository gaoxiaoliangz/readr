const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'


export type RequestTypes = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
}
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

export const DOUBAN_BOOKS = createRequestTypes('douban-books')
export const fetchDoubanBooks = keyword => {
  return {
    type: DOUBAN_BOOKS.REQUEST,
    payload: {
      keyword
    }
  }
}
