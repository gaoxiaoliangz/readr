import { take, put, call, select, fork, cancel, cancelled } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../../services/api'
import _ from 'lodash'
import * as selectors from '../../store/selectors'
import * as constants from '../../constants'
import { fetchEntity } from './utils'

const fetchBookProgress = fetchEntity.bind(null, actions.progress, api.fetchBookProgress)

// function* fetchProgress(bookId: string): any {
// }

function* updateProgress(bookId, percentage): any {
  try {
    yield call(api.setProgress, bookId, {
      percentage
    })
  } catch (error) {
    // TODO
  } finally {
    if (yield cancelled()) {
      console.log('updateProgress canceled')
    }
  }
}

export function* watchLoadProgress(): any {
  // const loadProgressAction = yield take(actions.LOAD_BOOK_PROGRESS)

}

export function* watchUpdateProgress(): any {
  while (true) {
    const action = yield take([actions.BOOK_PROGRESS_UPDATE, actions.LOAD_BOOK_PROGRESS])

    if (action.type === actions.LOAD_BOOK_PROGRESS) {
      
    }
    console.log(action)
    yield put({ type: 'fuck' })
  }
}

export default function* watchViewer(): any {
  while (true) {
    // const a = yield take(actions.BOOK_PROGRESS_UPDATE)
    // console.log(a)
    const loadProgressAction = yield take(actions.LOAD_BOOK_PROGRESS)
    console.log('here')
    // const updateAction = yield take(actions.BOOK_PROGRESS_UPDATE)
    // const session = yield select(selectors.common.session)
    // const userRole = _.get(session, 'user.role')
    // const { bookId: bookIdFromBasicInfo } = yield select(selectors.viewer.basicInfo)
    // console.log('h1')


    // console.log(updateAction, loadProgressAction)
    // console.log(updateAction)
    yield put({ type: 'fuck' })
    // console.log(updateAction)

    // if (userRole !== constants.ROLES.VISITOR) {
    //   console.log('h2')
    //   const updateTask = yield fork(updateProgress, bookIdFromBasicInfo, updateAction.percentage)

    //   // if (loadProgressAction.type === actions.LOAD_BOOK_PROGRESS) {
    //   //   console.log('canceling')
    //   //   yield cancel(updateTask)
    //   // }
    //   console.log('fetch progress')
    //   // yield fork(fetchBookProgress, { id: loadProgressAction.id })
    //   console.log('loggined in')
    // }

    // console.log('not logged in!')
  }
}
