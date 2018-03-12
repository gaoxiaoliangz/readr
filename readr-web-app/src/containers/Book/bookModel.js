import { createModel } from '@gxl/redux-model'
import _ from 'lodash'
import { select, take } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
import { getLocalBooks } from '../Shelf/shelfModel'
import createDbModel from '../../local-db'
import appModel from '../appModel'
import { htmlStringToNodes } from './layout/nodes'
import { groupPageFromChapters } from './layout/paging'
import { updateBookProgress, getBookProgress } from '../../service'
import { pageToProgress } from './progress'

const NAMESPACE = 'book'
const userDbModel = createDbModel('users')

export function* getBookId() {
  const { book } = yield select()
  return book.currBookId
}

export function* getRemoteProgress() {
  const bookId = yield getBookId()
  const progress = yield getBookProgress(bookId)
  const progress2 = progress || 0
  model.putRemoteProgress(progress2)
  return progress2
}

export function* initBook(id) {
  try {
    appModel.startLoading('book')
    model.$set('currBookId', id)
    model.loadBook(id)
    yield take('book/loadBook@end')
    model.getLayoutInfo(id)
    yield take('book/getLayoutInfo@end')
    const { book } = yield select()
    const bookNodes = book.bookNodes[id]
    const bookLayoutInfo = book.bookLayouts[id]
    const result = groupPageFromChapters(bookNodes, bookLayoutInfo, book.config.pageHeight)
    model.putBookPages(result)
    const progress = yield getRemoteProgress()
    model.$set('bookReady', true)
    appModel.stopLoading('book')
    model.goToProgress(progress)
  } catch (error) {
    console.error(error)
  }
}

export function* loadBook(id) {
  model.$set('bookStatus', FETCH_STATUS.FETCHING)
  try {
    yield getLocalBooks()
    const state = yield select()
    const book = state.shelf.localBooks[id]
    const sectionsOfNodes = book.content.map(section => {
      return {
        sectionId: section.id,
        nodes: htmlStringToNodes(section.htmlString)
      }
    })
    model.$set(['bookNodes', id], sectionsOfNodes)
    model.$set('bookStatus', FETCH_STATUS.SUCCESS)
  } catch (error) {
    console.error(error)
    model.$set('bookStatus', FETCH_STATUS.FAILURE)
  }
}

export function* getLayoutInfo() {
  model.$set('isEstimatingLayout', true)
  yield take('book/putLayoutInfo')
  model.$set('isEstimatingLayout', false)
}

export function* updateRemoteProgress(progress) {
  const bookId = yield getBookId()
  yield updateBookProgress(bookId, progress)
}

export function* goToProgress(progress) {
  try {
    const { book } = yield select()
    if (book.config.scrollMode) {
      model.$set('disableScrollListener', true)
      yield take('book/$set:disableScrollListener')
    }
    model.setClientProgress(progress)
    yield take('book/setClientProgress')
    if (book.config.scrollMode) {
      model.$set('disableScrollListener', false)
    }
  } catch (error) {
    console.error(error)
  }
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
    initBook,
    loadBook,
    getLayoutInfo,
    getRemoteProgress,
    updateRemoteProgress,
    goToProgress,
    *initConfig(config) {
      const { app: { user } } = yield select()
      if (user.uid) {
        const localConfig = yield userDbModel.get(user.uid)
        model.putConfig({
          ...localConfig,
          ...config
        })
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
        model.goToProgress(progress)
      } else {
        console.error(chapterId, 'not found!')
      }
    },
    *changeFontSize(newSize) {
      this.$set('config.fontSize', newSize)
      const id = yield getBookId()
      this.$set('disableScrollListener', true)
      this.getLayoutInfo(id)
      yield take('book/getLayoutInfo@end')
      const { book } = yield select()
      const bookNodes = book.bookNodes[id]
      const bookLayoutInfo = book.bookLayouts[id]
      const result = groupPageFromChapters(bookNodes, bookLayoutInfo, book.config.pageHeight)
      model.putBookPages(result)
      model.goToProgress(book.clientProgress)
      this.$set('disableScrollListener', false)
    },
    *toggleScrollMode(status) {
      const { book } = yield select()
      if (status) {
        this.$set('disableScrollListener', true)
        model.$set('config.scrollMode', status)
        model.goToProgress(book.clientProgress)
        this.$set('disableScrollListener', false)
      } else {
        model.$set('config.scrollMode', status)
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

export default model
