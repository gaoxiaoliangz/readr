import _ from 'lodash'
import { combineEpics } from 'redux-observable'
import { mergeMap, filter, mapTo, mergeAll, tap, map } from 'rxjs/operators'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { FETCH_STATUS } from './constants'
import {
  uploadBook, updateUser as updateFBUser, fetchUserOwnedBooks,
  delBook, fetchBook, SubscriptionManager, subscriptions
} from './service'
import { toArray } from './containers/utils'
import {
  HANDLE_USER_STATE_CHANGE, FETCH_BOOKS, DOWNLOAD_BOOK, updateUser,
  setAuthStatus, setShelfBookStatus, putBooks, startLoadingTask,
  stopLoadingTask, fetchBooks, updateDownloadStatus, GET_LOCAL_BOOKS,
  putLocalBooks, setUploadingStatus, UPLOAD_BOOK,
  REGISTER_OWNED_BOOKS_WATCHER, registerOwnedBooksWatcherSuccess,
  DEL_BOOK, delBookSuccess, INIT_BOOK_CONFIG, putBookConfig,
  INIT_BOOK,
  setCurrBookId,
  LOAD_BOOK,
  setBookFetchStatus,
  getLocalBooks,
  PUT_LOCAL_BOOKS,
  downloadBook,
  setBookNodes,
  UPDATE_DOWNLOAD_STATUS
} from './actions'
import createDbModel from './local-db'
import { htmlStringToNodes } from './containers/Book/layout/nodes'

const bookDbModel = createDbModel('books')
const userDbModel = createDbModel('users')
const subs = new SubscriptionManager()

const filterAction = (type, fn) => (action$, store) =>
  fn(filter(action => action.type === type)(action$), store, action$)

const handleUserStateChangeEpic = (action$, store) =>
  action$
    .pipe(
      filter(({ type, payload: user }) => {
        if (type === HANDLE_USER_STATE_CHANGE) {
          const state = store.getState()
          // We ignore token refresh events
          if (user && state.user.uid === user.uid) {
            return false
          }
          return true
        }
        return false
      }),
      map(({ payload: user }) => {
        if (user) {
          updateFBUser(user.uid, user.displayName, user.email, user.photoURL)
          return of(
            updateUser(_.pick(user, ['uid', 'displayName'])),
            setAuthStatus(1)
          )
        }
        return of(
          updateUser({}),
          setAuthStatus(0)
        )
      }),
      mergeAll()
    )

// const fetchBooksEpic = (action$, store) =>
//   // merge(
//   //   action$
//   //     .pipe(
//   //       filter(action => action.type === FETCH_BOOKS),
//   //       mapTo(of(
//   //         setShelfBookStatus(FETCH_STATUS.FETCHING),
//   //         startLoadingTask('books')
//   //       )),
//   //       mergeAll()
//   //     ),
//   action$
//     .pipe(
//       filter(action => action.type === FETCH_BOOKS),
//       map(action => of(
//         startLoadingTask('books'),
//         action,
//       )),
//       mergeAll(),
//       mergeMap(action => {
//         if (action.type === FETCH_BOOKS) {
//           return fromPromise(fetchUserOwnedBooks())
//         }
//         return action
//       }, (vfs, booksObj) => {
//         const books = toArray(booksObj)
//         books.forEach(book => {
//           subs.add(`books/${book.id}`, (data, first) => {
//             if (!first) {
//               store.dispatch(fetchBooks())
//             }
//           })
//         })
//         return of(
//           putBooks(books),
//           setShelfBookStatus(FETCH_STATUS.SUCCESS),
//           stopLoadingTask('books')
//         )
//       }),
//       mergeAll()
//     )


const fetchBooksEpic = (action$, store) =>
  merge(
    action$
      .pipe(
        filter(action => action.type === FETCH_BOOKS),
        mapTo(of(
          setShelfBookStatus(FETCH_STATUS.FETCHING),
          startLoadingTask('books')
        )),
        mergeAll()
      ),
    action$
      .pipe(
        filter(action => action.type === FETCH_BOOKS),
        mergeMap(() => {
          return fromPromise(fetchUserOwnedBooks())
        }, (vfs, booksObj) => {
          const books = toArray(booksObj)
          books.forEach(book => {
            subs.add(`books/${book.id}`, (data, first) => {
              if (!first) {
                store.dispatch(fetchBooks())
              }
            })
          })
          return of(
            putBooks(books),
            setShelfBookStatus(FETCH_STATUS.SUCCESS),
            stopLoadingTask('books')
          )
        }),
        mergeAll()
      )
  )

const downloadBookEpic = action$ =>
  merge(
    action$
      .pipe(
        filter(action => action.type === DOWNLOAD_BOOK),
        map(({ payload }) => updateDownloadStatus(payload, FETCH_STATUS.FETCHING))
      ),
    action$
      // TODO: error handling
      .pipe(
        filter(action => action.type === DOWNLOAD_BOOK),
        mergeMap(
          ({ payload }) => fromPromise(fetchBook(payload, FETCH_STATUS.FETCHING)),
          (vfs, book) => {
            bookDbModel.add(book)
            return updateDownloadStatus(vfs.payload, FETCH_STATUS.SUCCESS)
          }
        )
      ),
  )

const getLocalBooksEpic = action$ =>
  action$.pipe(
    filter(action => action.type === GET_LOCAL_BOOKS),
    mergeMap(() => fromPromise(bookDbModel.listAll())),
    map(books => putLocalBooks(books))
  )

const uploadBookEpic = action$ => {
  const uploadAction$ = filter(action => action.type === UPLOAD_BOOK)(action$)
  return merge(
    mapTo(setUploadingStatus(true))(uploadAction$),
    uploadAction$.pipe(
      mergeMap(({ payload }) => fromPromise(uploadBook(payload))),
      // TODO: error handling
      mapTo(setUploadingStatus(false))
    )
  )
}

const registerOwnedBooksWatcherEpic = (action$, store) =>
  action$.pipe(
    filter(action => action.type === REGISTER_OWNED_BOOKS_WATCHER),
    tap(() => {
      let isReg = true
      subscriptions.onUserOwnedBooksChanged(snapshot => {
        const books = snapshot.val()
        if (!isReg) {
          _.keys(books).forEach(id => {
            subs.add(`books/${id}`, () => {
              if (!isReg) {
                store.dispatch(fetchBooks())
              }
            })
          })
        }
        isReg = false
      })
    }),
    mapTo(registerOwnedBooksWatcherSuccess())
  )

const delBookEpic = filterAction(DEL_BOOK, action$ =>
  action$.pipe(
    mergeMap(({ payload: id }) => of(
      fromPromise(delBook(id)),
      fromPromise(bookDbModel.remove(id))
    )),
    // TODO: error handling
    mapTo(delBookSuccess())
  ))

const initBookConfigEpic = filterAction(INIT_BOOK_CONFIG, (action$, store) =>
  action$.pipe(
    filter(() => {
      const state = store.getState()
      return state.user.uid
    }),
    mergeMap(() => {
      // TODO: 只获取一次 state
      const state = store.getState()
      return fromPromise(userDbModel.get(state.user.uid))
    }, (action, localUser) => {
      return {
        ...localUser.config,
        ...action.payload
      }
    }),
    map(putBookConfig)
  ))

// const initBookEpic = filterAction(INIT_BOOK, action$ =>
//   merge(
//     action$.pipe(
//       map(({ payload: id }) => of(
//         startLoadingTask('book'),
//         setCurrBookId(id)
//       ))
//     )),
//   action$.pipe(
//     mergeMap
//   ))
//   )

const loadBookEpic = filterAction(LOAD_BOOK, (action$, store, rawAction$) => {
  const finishLoadBook = book => {
    const sectionsOfNodes = book.content.map(section => {
      return {
        sectionId: section.id,
        nodes: htmlStringToNodes(section.htmlString)
      }
    })
    return of(
      setBookNodes({
        id: book.id,
        nodes: sectionsOfNodes
      }),
      setBookFetchStatus(FETCH_STATUS.SUCCESS)
    )
  }
  return merge(
    action$.pipe(
      map(() => of(
        setBookFetchStatus(FETCH_STATUS.FETCHING),
        getLocalBooks()
      )),
      mergeAll()
    ),
    rawAction$.pipe(
      filter(action => action.type === LOAD_BOOK),
      mergeMap(() => {
        return rawAction$.pipe(filter(action => action.type === PUT_LOCAL_BOOKS))
      }, loadBookAction => {
        const id = loadBookAction.payload
        const state = store.getState()
        const book = state.localBooks[id]
        if (!book) {
          console.log('download')
          return store.dispatch(downloadBook(id))
        }
        console.log('already local')
        return finishLoadBook(book)
      }),
      filter(action => action.type !== DOWNLOAD_BOOK),
      // tap(console.log)
      mergeAll()
    ),
    rawAction$.pipe(
      filter(action => action.type === LOAD_BOOK),
      mergeMap(() => {
        return rawAction$.pipe(filter(action =>
          action.type === UPDATE_DOWNLOAD_STATUS && action.payload === FETCH_STATUS.SUCCESS))
      }, loadBookAction => {
        console.log('download handle')
        const id = loadBookAction.payload
        const state = store.getState()
        const book = state.localBooks[id]
        return finishLoadBook(book)
      })
    )
  )
})

export default combineEpics(
  handleUserStateChangeEpic,
  fetchBooksEpic,
  downloadBookEpic,
  getLocalBooksEpic,
  uploadBookEpic,
  registerOwnedBooksWatcherEpic,
  delBookEpic,
  initBookConfigEpic,
  // initBookEpic,
  loadBookEpic
)
