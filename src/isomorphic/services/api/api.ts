import callApi from '../utils/callApi'
import helpers from '../../helpers'

const { local: apiRoot, douban: doubanApiRoot } = helpers.getApiRoots()

export const fetchBook = id => callApi(`${apiRoot}/books/${id}`)

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
