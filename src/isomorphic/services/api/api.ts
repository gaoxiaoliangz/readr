import callApi from '../utils/callApi'
import helpers from '../../helpers'
import normalizeResponse from '../utils/normalizeResponse'
import schemas from '../schemas'
import utils from '../../utils'

const { local: apiRoot, douban: doubanApiRoot } = helpers.getApiRoots()

export function fetchNormalized(endpoint, schema, fetchOptions = {}) {
  return normalizeResponse(callApi(`${apiRoot}/${endpoint}`, fetchOptions), schema)
}

export const fetchBook = ({ params }) => fetchNormalized(`book/${params[0]}`, schemas.BOOK)

export type fetchBooks  = {
  keyword?: string
  page?: number
} | string
export const fetchBooks = (options?: fetchBooks) => {
  let endpoint
  if (typeof options === 'string') {
    endpoint = options
  } else {
    const queryString = utils.parseUrlencoded(options)
    endpoint = `books?${queryString}`
  }
  return fetchNormalized(endpoint, schemas.BOOK_ARRAY)
}

// auth
export type userLogin = {
  login: string
  password: string
}
export const userLogin = (data: userLogin) => callApi(`${apiRoot}/auth`, {
  method: 'POST',
  data
})

export type userSignup = {
  username: string
  email: string
  password: string
}
export const userSignup = (data: userSignup) => callApi(`${apiRoot}/auth`, {
  method: 'POST',
  data
})

export const fetchDoubanBooks = keyword => callApi(`${doubanApiRoot}/book/search?count=10&q=${keyword}`, {
  useJsonp: true
})
