// export default function book(state, action) {
//   if(typeof state === 'undefined') {
//     state = {}
//   }
//   switch (action.type) {
//     case 'DOUBAN_BOOK_SEARCH_REQUEST':
//       return Object.assign({}, state, {
//         isFetchingSearch: true
//       })
//
//     case 'DOUBAN_BOOK_SEARCH_SUCCESS':
//       return Object.assign({}, state, {
//         isFetchingSearch: false,
//         searchResults: action.response
//       })
//
//     case 'DOUBAN_BOOK_SEARCH_FAILURE':
//       return Object.assign({}, state, {
//         isFetchingSearch: false,
//         error: action.response
//       })
//
//     case 'CLEAR_BOOK_SEARCH':
//       return Object.assign({}, state, {
//         searchResults: null
//       })
//
//     default:
//       return state
//   }
// }
