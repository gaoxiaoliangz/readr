import { take, put, call, select } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../../services/api'
import _ from 'lodash'
import * as selectors from '../../store/selectors'

export default function* watchViewer(): any {
  while (true) {
    const updateAction = yield take(actions.BOOK_PROGRESS_UPDATE)
    const basicInfo = yield select(selectors.viewer.basicInfo)
    const bookId = basicInfo.bookId
    yield call(api.setProgress, bookId, {
      percentage: updateAction.percentage
    })
  }
}
