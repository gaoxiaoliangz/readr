import { promisedCallApi } from 'actions'

export function fetchUserAuthInfo() {
  return promisedCallApi({
    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
    endpoint: 'auth'
  }, {})
}

// export function fetchDoubanBookSearchResults(endpoint) {
//   return promisedCallApi({
//     types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
//     endpoint,
//     apiUrl: API_DOUBAN_BOOKS
//   }, {})
// }
