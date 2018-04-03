import _ from 'lodash'
import { combineEpics, ActionsObservable } from 'redux-observable'
import { mergeMap, filter, mapTo, mergeAll, tap, map, concat, catchError } from 'rxjs/operators'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { FETCH_STATUS } from './constants'
import {
  uploadBook, updateUser as updateFBUser, fetchUserOwnedBooks,
  delBook, fetchBook, SubscriptionManager, subscriptions, getBookProgress
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
  UPDATE_DOWNLOAD_STATUS,
  makeAction,
  errorAction,
  CALC_BOOK_LAYOUT,
  updateBookEstimatingState,
  calcBookLayout,
  loadBook,
  calcBookLayoutSuccess,
  FETCH_REMOTE_PROGRESS,
  fetchRemoteProgress,
  updateBookReadyState,
  setDisableScrollListener,
  SET_DISABLE_SCROLL_LISTENER,
  GOTO_PROGRESS,
  setClientProgress,
  gotoProgress
} from './actions'
import createDbModel from './local-db'
import { htmlStringToNodes } from './containers/Book/layout/nodes'

const bookDbModel = createDbModel('books')
const userDbModel = createDbModel('users')
const subs = new SubscriptionManager()

const forkEpic = (epicFactory, ...actions) => {
  const actions$ = ActionsObservable.of(...actions)
  return epicFactory(actions$)
}

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
  action$.ofType(DOWNLOAD_BOOK.REQUEST).pipe(
    mergeMap(
      ({ payload }) => fromPromise(fetchBook(payload, true)),
      (action, book) => {
        bookDbModel.add(book)
        return makeAction(DOWNLOAD_BOOK.SUCCESS, book)
        // TODO: error handling
        // return of(makeAction(DOWNLOAD_BOOK.SUCCESS)).pipe(
        //   catchError(err => errorAction(DOWNLOAD_BOOK.FAILURE, {
        //     message: err.message,
        //     id: action.payload
        //   }))
        // )
      },
    )
  )

const getLocalBooksEpic = action$ =>
  action$.pipe(
    filter(action => action.type === GET_LOCAL_BOOKS.REQUEST),
    mergeMap(() => fromPromise(bookDbModel.listAll())),
    map(books => makeAction(GET_LOCAL_BOOKS.SUCCESS, books)),
    catchError(err => errorAction(GET_LOCAL_BOOKS.FAILURE, err))
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

const initBookEpic = action$ =>
  merge(
    action$.ofType(INIT_BOOK.REQUEST).pipe(
      map(({ payload: id }) => of(
        startLoadingTask('book'),
        setCurrBookId(id)
      )),
      mergeAll()
    ),
    action$.ofType(INIT_BOOK.REQUEST).pipe(
      // mergeMap(action => {
      //   const bookId = action.payload
      //   return of(
      //     forkEpic(loadBookEpic, loadBook(bookId)).pipe(
      //       filter(loadBookAction => loadBookAction.type === LOAD_BOOK.SUCCESS),
      //       map(loadBookAction => of(loadBookAction, calcBookLayout(bookId))),

      //     ),
      //     forkEpic(fetchRemoteProgressEpic, fetchRemoteProgress(bookId)).pipe(
      //       map(fetchProgressAction => {
      //         console.log(fetchProgressAction)
      //         return of(fetchProgressAction, makeAction('ok!'))
      //       }),
      //       mergeAll()
      //     )
      //   ).pipe(
      //     mergeAll(),
      //   )
      // }),
      mergeMap(action => {
        const bookId = action.payload
        console.log(bookId)
        return forkEpic(loadBookEpic, loadBook(bookId)).pipe(
          filter(loadBookAction => loadBookAction.type === LOAD_BOOK.SUCCESS),
          map(loadBookAction => of(loadBookAction, calcBookLayout(bookId))),
          mergeAll(),
          filter(action1 => action1.type === CALC_BOOK_LAYOUT.SUCCESS),
          mergeMap(() => {
            return forkEpic(fetchRemoteProgressEpic, fetchRemoteProgress(bookId)).pipe(
              map(fetchProgressAction => {
                return of(updateBookReadyState(true), setDisableScrollListener(true), fetchProgressAction)
              }),
              mergeAll(),
              filter(action1 => action1.type === FETCH_REMOTE_PROGRESS.SUCCESS),
              mergeMap(fetchProgressAction => {
                return forkEpic(gotoProgressEpic, gotoProgress(fetchProgressAction.payload))
                  .pipe(
                    concat(makeAction(INIT_BOOK.SUCCESS))
                  )
              }),
              mergeAll(),
            )
          })
        )
      }),
      mergeAll()
    )
  )

const gotoProgressEpic = action$ =>
  action$.ofType(GOTO_PROGRESS.REQUEST).pipe(
    map(action => {
      return of(
        action,
        setClientProgress(action.payload),
        setDisableScrollListener(false),
        makeAction(GOTO_PROGRESS.SUCCESS)
      )
    })
  )

const fetchRemoteProgressEpic = action$ =>
  action$.ofType(FETCH_REMOTE_PROGRESS.REQUEST).pipe(
    mergeMap(action => {
      console.log('here')
      return fromPromise(getBookProgress(action.payload))
    }, (action, progress) => {
      // TODO: error handling
      return makeAction(FETCH_REMOTE_PROGRESS.SUCCESS, progress)
    }),
  )

// TODO: error handling
const loadBookEpic = action$ => {
  return action$.ofType(LOAD_BOOK.REQUEST).pipe(
    mergeMap(action =>
      forkEpic(getLocalBooksEpic, getLocalBooks()).pipe(
        map(localBookAction => {
          const bookId = action.payload
          const finishLoadBook = book => {
            const sectionsOfNodes = book.content.map(section => {
              return {
                sectionId: section.id,
                nodes: htmlStringToNodes(section.htmlString)
              }
            })
            return [
              makeAction(LOAD_BOOK.SUCCESS, {
                id: book.id,
                nodes: sectionsOfNodes
              }),
            ]
          }
          const book = localBookAction.payload[bookId]
          if (book) {
            return of(localBookAction, ...finishLoadBook(book))
          }
          return of(localBookAction).pipe(
            mergeMap(() => {
              const source$ = forkEpic(downloadBookEpic, downloadBook(bookId))
              return source$.pipe(
                map(downloadBookAction => {
                  return of(downloadBookAction, ...finishLoadBook(downloadBookAction.payload))
                })
              )
            }),
            mergeAll()
          )
        }),
        mergeAll()
      )
    ),
  )
}

export default combineEpics(
  handleUserStateChangeEpic,
  fetchBooksEpic,
  downloadBookEpic,
  getLocalBooksEpic,
  uploadBookEpic,
  registerOwnedBooksWatcherEpic,
  delBookEpic,
  initBookConfigEpic,
  initBookEpic,
  loadBookEpic,
  fetchRemoteProgressEpic,
  gotoProgressEpic
)
