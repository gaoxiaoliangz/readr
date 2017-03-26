import { take, put, select, fork } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import _ from 'lodash'
import * as selectors from '../selectors'
import utils from '../utils'
import calcBook from './effects/calcBook'
import { DEFAULT_FONT_SIZE, DEFAULT_PAGE_HEIGHT } from '../constants/viewerDefs'
import shouldViewerBeFluid from '../helpers/shouldViewerBeFluid'
import schemas from '../schemas'

async function pause(t = 1) {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve()
    }, t)
  })
}

const getDefaultConfig = (override: Viewer.Config = {}): Viewer.Config => {
  const fluid = shouldViewerBeFluid()
  const viewerWidth = utils.getScreenInfo().width

  return {
    ...{
      fluid,
      isScrollMode: true,
      isTouchMode: fluid,
      pageHeight: DEFAULT_PAGE_HEIGHT,
      fontSize: DEFAULT_FONT_SIZE,
      theme: 'WHITE' as Viewer.Themes,

      // width of viewer is exactly the width here when in fluid mode
      // when not the width will be 'MOBILE_BREAK_POINT'
      width: viewerWidth
    },
    ...override
  }
}

function* loadProgressAndGo(bookId) {
  const session: Session = yield select(selectors.session)
  if (session.role !== 'visitor') {
    yield put(actions.api.loadBookProgress(bookId))
    yield take(ACTION_TYPES.BOOK_PROGRESS.SUCCESS)
    const { percentage } = yield select(selectors.entity(schemas.BOOK_PROGRESS, bookId))
    yield put(actions.viewer.viewerGoTo(percentage))
  } else {
    yield put(actions.viewer.viewerGoTo(0))
  }
}

function* watchInitialization() {
  while (true) {
    const { payload: { bookId, config: _config } } = yield take(ACTION_TYPES.VIEWER.INITIALIZE)
    yield put(actions.viewer.setStatus({
      statusText: '初始化',
      isReady: false
    }))
    // kinda hacky, otherwise component won't render as store changes
    yield pause()
    const config = getDefaultConfig(_config)
    yield put(actions.viewer.configViewer(config, true))
    yield put(actions.viewer.setComponents({
      showNavigation: false,
      showPanel: false,
      showPreference: false,
      showProgress: false
    }))
    const computed = yield select(selectors.viewer.computed(bookId))

    if (_.isEmpty(computed) || _config) {
      yield put(actions.viewer.setStatus({
        statusText: '获取书籍内容'
      }))
      yield pause()
      yield [put(actions.api.loadBookInfo(bookId)), put(actions.api.loadBookContent(bookId))]
      yield put(actions.viewer.setStatus({
        statusText: '排版'
      }))
      yield pause()
      yield put(actions.viewer.configViewer({
        isCalcMode: true
      }, true))
      yield take(ACTION_TYPES.VIEWER.CALC_SUCCESS)
      yield put(actions.viewer.setStatus({
        statusText: '即将完成'
      }))
      yield pause()
      yield put(actions.viewer.configViewer({
        isCalcMode: false
      }, true))
    }
    yield loadProgressAndGo(bookId)
    yield pause()
    yield put(actions.viewer.setStatus({
      isReady: true
    }))
  }
}

function* watchCalcBook() {
  while (true) {
    const { payload: { bookId, wrap } } = yield take(ACTION_TYPES.VIEWER.CALC_TRIGGER)
    const bookContent = yield select(selectors.entity(schemas.BOOK_CONTENT, bookId))
    const flesh = bookContent.flesh || {}

    try {
      const computed = calcBook(wrap, flesh)
      yield put(actions.viewer.calcBookSuccess(bookId, computed))
    } catch (error) {
      yield put(actions.viewer.calcBookFailure(bookId, error))
    }
  }
}

function* watchGoTo() {
  while (true) {
    const { payload } = yield take(ACTION_TYPES.VIEWER.GO_TO)
    const bookId = yield select(selectors.viewer.id)
    const computed = yield select(selectors.viewer.computed(bookId))
    const { pageHeight, isScrollMode } = yield select(selectors.viewer.config)
    const pageCount = computed.length
    const totalHeight = pageCount * pageHeight
    let percentage = payload

    if (payload > 1) {
      // payload is page number
      percentage = payload / pageCount
    }

    if (isScrollMode) {
      const scrollTop = totalHeight * percentage
      document.body.scrollTop = scrollTop
    } else {
      // todo: page flip mode
    }
  }
}

// function* watchConfig() {
//   while (true) {
//     const oldConfig: Viewer.Config = yield select(selectors.viewer.config)
//     const action = yield take(ACTION_TYPES.VIEWER.CONFIG)
//     const bookId = yield select(selectors.viewer.id)
//     const newConfig: Viewer.Config = yield select(selectors.viewer.config)
//     const isInit = _.get(action, 'meta.isInit')
//     const fluidChanged = oldConfig.fluid !== newConfig.fluid
//     let widthChangedInFluid = false

//     if (!fluidChanged && oldConfig.fluid) {
//       widthChangedInFluid = oldConfig.width !== newConfig.width
//     }

//     const needRerender = (oldConfig.fontSize !== newConfig.fontSize)
//       || (oldConfig.fluid !== newConfig.fluid)
//       || fluidChanged
//       || widthChangedInFluid

//     if (needRerender && !isInit) {
//       if (process.env.NODE_ENV !== 'production') {
//         console.info('Start rerendering')
//       }
//       yield pause()
//       yield put(actions.viewer.setComponents({
//         showNavigation: false,
//         showPanel: false,
//         showPreference: false,
//         showProgress: false,
//         // todo: remove hideall
//         // hideAll: true
//       }))
//       yield pause()
//       yield put(actions.viewer.setStatus({
//         isReady: false
//       }))
//       yield pause()
//       yield put(actions.viewer.configViewer({
//         isCalcMode: true,
//         isTouchMode: shouldViewerBeFluid()
//       }))
//       // yield put(actions.viewer.toggleViewerPanel(false))
//       yield take(ACTION_TYPES.VIEWER.CALC_SUCCESS)
//       yield put(actions.viewer.configViewer({
//         isCalcMode: false
//       }))
//       yield loadProgressAndGo(bookId)
//       yield put(actions.viewer.setComponents({
//         hideAll: false
//       }))
//       yield pause()
//       put(actions.viewer.setStatus({
//         isReady: true
//       }))
//     }
//   }
// }

export default function* watchViewer() {
  yield [
    fork(watchInitialization),
    fork(watchCalcBook),
    fork(watchGoTo),
    // fork(watchConfig)
  ]
}
