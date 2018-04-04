import { createModel } from '@gxl/redux-model'
import _ from 'lodash'
import { select, take, put } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
import shelfModel from '../Shelf/shelfModel'
import createDbModel from '../../local-db'
import appModel from '../appModel'
import { htmlStringToNodes } from './layout/nodes'
import { groupPageFromChapters } from './layout/paging'
import { updateBookProgress, getBookProgress } from '../../service'
import { pageToProgress } from './progress'

const NAMESPACE = 'book'
const userDbModel = createDbModel('users')
const { getLocalBooks, downloadBook } = shelfModel.actionCreators
const { startLoading, stopLoading } = appModel.actionCreators
const { GET_LOCAL_BOOKS_END, DOWNLOAD_BOOK_END } = shelfModel.actionTypes

export function* getBookId() {
  const { book } = yield select()
  return book.currBookId
}

const model = createModel({
  namespace: NAMESPACE,
  state: {
    currBookId: null,
    bookReady: false,
    bookStatus: FETCH_STATUS.NONE,
    bookNodes: {},
    bookLayouts: {},
    bookPages: {},
    isEstimatingLayout: false,
    clientProgress: 0,
    remoteProgress: 0,
    showTopPanel: false,
    showToc: false,
    showPref: false,
    disableScrollListener: false,
    config: {
      fontSize: 15,
      pageHeight: 700,
      theme: 'white',
      scrollMode: false,
      contentWidth: 600,
      lineHeight: 24,
    }
  },
  effects: {
    *initBook(id) {
      try {
        yield put(startLoading('book'))
        yield put($set('currBookId', id))
        yield put(initConfig())
        yield take(INIT_CONFIG_END)
        yield put(loadBook(id))
        yield take(LOAD_BOOK_END)
        yield put(getLayoutInfo(id))
        yield take(GET_LAYOUT_INFO_END)
        const { book } = yield select()
        const bookNodes = book.bookNodes[id]
        const bookLayoutInfo = book.bookLayouts[id]
        const result = groupPageFromChapters(bookNodes, bookLayoutInfo, book.config.pageHeight)
        yield put(putBookPages(result))
        const progress = yield model.effects.getRemoteProgress()
        yield put($set('bookReady', true))
        yield put(stopLoading('book'))
        yield put(goToProgress(progress))
      } catch (error) {
        console.error(error)
      }
    },
    *loadBook(id) {
      yield put($set('bookStatus', FETCH_STATUS.FETCHING))
      try {
        yield put(getLocalBooks())
        yield take(GET_LOCAL_BOOKS_END)
        let state = yield select()
        let book = state.shelf.localBooks[id]
        if (!book) {
          yield put(downloadBook(id))
          yield take(DOWNLOAD_BOOK_END)
          yield getLocalBooks()
          yield take(GET_LOCAL_BOOKS_END)
          state = yield select()
          book = state.shelf.localBooks[id]
        }
        const sectionsOfNodes = book.content.map(section => {
          return {
            sectionId: section.id,
            nodes: htmlStringToNodes(section.htmlString)
          }
        })
        yield put($set(['bookNodes', id], sectionsOfNodes))
        yield put($set('bookStatus', FETCH_STATUS.SUCCESS))
      } catch (error) {
        console.error(error)
        yield put($set('bookStatus', FETCH_STATUS.FAILURE))
      }
    },
    *getLayoutInfo() {
      yield put($set('isEstimatingLayout', true))
      yield take(PUT_LAYOUT_INFO)
      yield put($set('isEstimatingLayout', false))
    },
    *getRemoteProgress() {
      const bookId = yield getBookId()
      const progress = yield getBookProgress(bookId)
      const progress2 = progress || 0
      yield put(putRemoteProgress(progress2))
      return progress2
    },
    *updateRemoteProgress(progress) {
      const bookId = yield getBookId()
      yield updateBookProgress(bookId, progress)
    },
    *goToProgress(progress) {
      try {
        const { book } = yield select()
        if (book.config.scrollMode) {
          yield put($set('disableScrollListener', true))
        }
        yield put(setClientProgress(progress))
        if (book.config.scrollMode) {
          yield put($set('disableScrollListener', false))
        }
      } catch (error) {
        console.error(error)
      }
    },
    *initConfig() {
      const { app: { user }, book: { config } } = yield select()
      let pageHeight = window.innerHeight - 120
      const rest = pageHeight % config.lineHeight
      pageHeight -= rest

      if (user.uid) {
        const localConfig = yield userDbModel.get(user.uid)
        yield put(putConfig({
          ...localConfig,
          pageHeight
        }))
      }
    },
    *goToChapter(chapterId) {
      const { book } = yield select()
      const pages = book.bookPages[book.currBookId]
      let found
      for (let i = 0; i < pages.length; i++) {
        if (pages[i].chapterId === chapterId) {
          found = i + 1
          break
        }
      }
      if (found) {
        const progress = pageToProgress(found, pages.length)
        yield put(goToProgress(progress))
      } else {
        console.error(chapterId, 'not found!')
      }
    },
    *changeFontSize(newSize) {
      yield put($set('config.fontSize', newSize))
      const id = yield getBookId()
      yield put($set('disableScrollListener', true))
      yield put(getLayoutInfo(id))
      yield take(GET_LAYOUT_INFO_END)
      const { book } = yield select()
      const bookNodes = book.bookNodes[id]
      const bookLayoutInfo = book.bookLayouts[id]
      const result = groupPageFromChapters(bookNodes, bookLayoutInfo, book.config.pageHeight)
      yield put(putBookPages(result))
      yield put(goToProgress(book.clientProgress))
      yield take(GO_TO_PROGRESS_END)
      yield put($set('disableScrollListener', false))
    },
    *toggleScrollMode(status) {
      const { book } = yield select()
      if (status) {
        yield put($set('disableScrollListener', true))
        yield put($set('config.scrollMode', status))
        yield put(goToProgress(book.clientProgress))
        yield take(GO_TO_PROGRESS_END)
        yield put($set('disableScrollListener', false))
      } else {
        yield put($set('config.scrollMode', status))
      }
    }
  },
  watch: {
    config({ value, state }) {
      const uid = _.get(state, 'app.user.uid')
      if (uid) {
        userDbModel.get(uid).then(config => {
          if (config) {
            userDbModel.update(uid, value)
          } else {
            userDbModel.add({
              id: uid,
              config: value
            })
          }
        })
      }
    }
  },
  computations: {
    putConfig(state, config) {
      return {
        ...state,
        config: {
          ...state.config,
          ...config
        }
      }
    },
    setClientProgress(state, clientProgress) {
      return {
        ...state,
        clientProgress
      }
    },
    putLayoutInfo(state, result) {
      return {
        ...state,
        bookLayouts: {
          ...state.bookLayouts,
          [state.currBookId]: result
        }
      }
    },
    putBookPages(state, result) {
      return {
        ...state,
        bookPages: {
          ...state.bookPages,
          [state.currBookId]: result
        }
      }
    },
    putRemoteProgress(state, remoteProgress = 0) {
      return {
        ...state,
        remoteProgress
      }
    },
    destroy(state) {
      return {
        ...state,
        currBookId: null,
        bookReady: false,
        bookStatus: FETCH_STATUS.NONE,
        isEstimatingLayout: false,
        clientProgress: 0,
        showTopPanel: false,
        showToc: false,
        showPref: false,
        disableScrollListener: false,
      }
    }
  }
})

const {
  $set, setClientProgress, putBookPages, initConfig,
  putConfig, loadBook, getLayoutInfo,
  getRemoteProgress, goToProgress, putRemoteProgress
} = model.actionCreators
const {
  LOAD_BOOK_END, GET_LAYOUT_INFO_END, INIT_CONFIG_END,
  PUT_LAYOUT_INFO, GET_REMOTE_PROGRESS_END, GO_TO_PROGRESS_END
} = model.actionTypes

console.log(model)

export default model
