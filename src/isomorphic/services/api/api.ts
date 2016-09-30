import callApi from '../utils/callApi'
import { ApiRoots } from '../config'

export const fetchBook = id => callApi(`${ApiRoots.LOCAL}books/${id}`)

// auth
export type userLogin = {
  login: string
  password: string
}
export const userLogin = (data: userLogin) => callApi(`${ApiRoots.LOCAL}auth`, {
  method: 'POST',
  data
})

export const fetchDoubanBooks = keyword => callApi(`${ApiRoots.DOUBAN_BOOKS}search?count=10&q=${keyword}`, {
  useJsonp: true
})
