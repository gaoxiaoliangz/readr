import { Observable } from 'rxjs/Observable'
import { mergeMap, concat, filter, mapTo, mergeAll } from 'rxjs/operators'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { FETCH_STATUS } from '../../constants'
import { uploadBook, fetchUserOwnedBooks, delBook, fetchBook, SubscriptionManager, subscriptions } from '../../service'
import { toArray } from '../utils'

const setBookStatus = status => ({
  type: 'shelf/$set:booksStatus',
  payload: {
    path: ['booksStatus'],
    value: status
  }
})

// const startAppLoading = payload => ({
//   type: 'app/$set:startLoading',
//   payload
// })

// const stopAppLoading = payload => ({
//   type: 'app/$set:stopLoading',
//   payload
// })

const putBooks = books => ({
  type: 'shelf/putBooks',
  payload: books
})

const shelfEpic = action$ =>
  merge(
    action$
      .pipe(
        filter(action => action.type === 'shelf/fetchBooks'),
        mapTo(setBookStatus(FETCH_STATUS.FETCHING))
      ),
    action$
      .pipe(
        filter(action => action.type === 'shelf/fetchBooks'),
        mergeMap(() => {
          return fromPromise(fetchUserOwnedBooks())
        }, (valueFromSource, valueFromPromise) => {
          return of(
            putBooks(toArray(valueFromPromise)),
            setBookStatus(FETCH_STATUS.SUCCESS),
          )
        }),
        mergeAll()
      )
  )

export default shelfEpic
