import _ from 'lodash'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { mergeMap, concat, filter, mapTo, mergeAll, tap, map } from 'rxjs/operators'
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
  HANDLE_USER_STATE_CHANGE, FETCH_BOOKS, updateUser,
  setAuthStatus, setShelfBookStatus, putBooks, startLoadingTask,
  stopLoadingTask
} from './actions'

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

const fetchBooksEpic = action$ =>
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
        }, (valueFromSource, valueFromPromise) => {
          return of(
            putBooks(toArray(valueFromPromise)),
            setShelfBookStatus(FETCH_STATUS.SUCCESS),
            stopLoadingTask('books')
          )
        }),
        mergeAll()
      )
  )

export default combineEpics(
  handleUserStateChangeEpic,
  fetchBooksEpic
)
