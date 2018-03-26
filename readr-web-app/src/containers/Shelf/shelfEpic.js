import { Observable } from 'rxjs/Observable'
import { FETCH_STATUS } from '../../constants'

const shelfEpic = action$ =>
  action$.filter(action => action.type === 'shelf/fetchBooks')
    .flatMap(() =>
      Observable.concat(
        Observable.of({
          type: 'shelf/$set:booksStatus',
          payload: {
            path: ['booksStatus'],
            value: FETCH_STATUS.FETCHING
          }
        }),
        Observable.of({
          type: 'app/startLoading',
          payload: 'books'
        })
      ))

export default shelfEpic
