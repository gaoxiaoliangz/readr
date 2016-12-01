import { takeEvery, takeLatest } from 'redux-saga'
import { take, put, call, select, fork, cancel, cancelled } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ActionTypes from '../actions/actionTypes'
import api from '../../services/api'
import _ from 'lodash'
import * as selectors from '../../store/selectors'
import * as constants from '../../constants'
import { fetchEntity } from './utils'
import helpers from '../../helpers'
import * as viewerUtils from '../../routes/Viewer/Viewer.utils'
import utils from '../../utils'

const DEFAULT_PAGE_HEIGHT = 900

const fetchBookProgress = fetchEntity.bind(null, actions.progress, api.fetchBookProgress)

function* setViewer(bookId, config: ViewerConfig = {}): any {
  const viewerWidth = utils.getScreenInfo().view.width
  const isSmallScreen = viewerWidth < 700

  let initialized = {
    bookId,
    isCalcMode: true,
    fluid: isSmallScreen,
    isTouchMode: isSmallScreen,
    pageHeight: DEFAULT_PAGE_HEIGHT,
    width: isSmallScreen
      ? viewerWidth
      : 'max'
  }

  const computed = yield select(selectors.viewer.computed(bookId))

  if (computed.length > 0) {
    initialized.isCalcMode = false
  }
  initialized = _.merge({}, initialized, config)

  yield put(actions.configViewer(bookId, initialized))
}

function* setViewerWithAction(action): any {
  const bookId = action.bookId
  const config: ViewerConfig = action.config

  yield setViewer(bookId, config)
}

function* watchInitViewer() {
  yield* takeEvery(ActionTypes.VIEWER_INITIALIZE, setViewerWithAction)
}

function calcBook(wrap: HTMLElement, flesh: TBookFlesh) {
  const startCalcHtmlTime = new Date().valueOf()
  const computedChapters = Array.prototype
    .map.call(wrap.childNodes, child => {
      const childDiv = child as HTMLDivElement
      const id = childDiv.getAttribute('id')
      const nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes)

      return {
        id,
        nodeHeights
      }
    })
  const endCalcHtmlTime = new Date().valueOf()
  helpers.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)

  const computedPages = viewerUtils.groupPageFromChapters(flesh, computedChapters, 900)

  return computedPages
}

function* updateProgress(bookId, percentage): any {
  try {
    yield call(api.setProgress, bookId, {
      percentage
    })
  } catch (error) {
    console.error(error)
  } finally {
    if (yield cancelled()) {
      helpers.print('updateProgress canceled')
    }
  }
}

function* watchCalcBook(): any {
  while (true) {
    const { bookId, wrap } = yield take(ActionTypes.VIEWER_CALC_START)
    const bookContent = yield select(selectors.common.entity('bookContents', bookId))
    const flesh = bookContent.flesh || {}

    try {
      const computed = calcBook(wrap, flesh)
      yield put(actions.calcBookSuccess(bookId, computed))
      yield setViewer(bookId)
    } catch (error) {
      yield put(actions.calcBookFailure(bookId, error))
    }
  }
}

function* watchProgressOperations(): any {
  while (true) {
    const action = yield take([ActionTypes.BOOK_PROGRESS_UPDATE, ActionTypes.LOAD_BOOK_PROGRESS])
    const session = yield select(selectors.common.session)
    const userRole = _.get(session, 'user.role')

    if (userRole !== constants.ROLES.VISITOR) {
      if (action.type === ActionTypes.LOAD_BOOK_PROGRESS) {
        yield call(fetchBookProgress, { id: action.id })
      }

      if (action.type === ActionTypes.BOOK_PROGRESS_UPDATE) {
        yield updateProgress(action.id, action.percentage)
      }
    } else {
      helpers.print('Not logged in, progress will not be fetched!')
    }
  }
}

export default function* watchViewer() {
  yield [
    fork(watchProgressOperations),
    fork(watchCalcBook),
    fork(watchInitViewer)
  ]
}
