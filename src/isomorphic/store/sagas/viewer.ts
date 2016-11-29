import { take, put, call, select, fork, cancel, cancelled } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../../services/api'
import _ from 'lodash'
import * as selectors from '../../store/selectors'
import * as constants from '../../constants'
import { fetchEntity } from './utils'
import helpers from '../../helpers'

const fetchBookProgress = fetchEntity.bind(null, actions.progress, api.fetchBookProgress)

function* updateProgress(bookId, percentage): any {
  try {
    yield call(api.setProgress, bookId, {
      percentage
    })
  } catch (error) {
    // TODO
  } finally {
    if (yield cancelled()) {
      helpers.print('updateProgress canceled')
    }
  }
}

function* handleProgress(): any {
  while (true) {
    const action = yield take([actions.BOOK_PROGRESS_UPDATE, actions.LOAD_BOOK_PROGRESS])
    const session = yield select(selectors.common.session)
    const userRole = _.get(session, 'user.role')

    if (userRole !== constants.ROLES.VISITOR) {
      if (action.type === actions.LOAD_BOOK_PROGRESS) {
        yield call(fetchBookProgress, { id: action.id })
      }

      if (action.type === actions.BOOK_PROGRESS_UPDATE) {
        yield updateProgress(action.id, action.percentage)
      }
    } else {
      helpers.print('Not logged in, progress will not be fetched!')
    }
  }
}

export default function* watchViewer() {
  yield [
    fork(handleProgress)
  ]
}
