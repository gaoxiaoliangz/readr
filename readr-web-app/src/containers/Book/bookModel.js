import { createModel } from '@gxl/redux-model'
import { select, take, put } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
// import createDbModel from '../../local-db'
import { getLocalBooks } from '../Shelf/shelfModel'
import { htmlStringToNodes } from './layout/nodes'
import { groupPageFromChapters } from './layout/paging'

const { firebase } = window
const db = firebase.database()
// const dbModel = createDbModel('books')
const NAMESPACE = 'book'

export function* getBookId() {
  const { book } = yield select()
  return book.currBookId
}

export function* getRemoteProgress() {
  const bookId = yield getBookId()
  const progress = yield db.ref('progress')
    .child(bookId)
    .once('value')
    .then(data => data.val().progress || 0)
    .catch(err => {
      console.error(err)
      return 0
    })
  model.putRemoteProgress(progress)
  return progress
}

export function* initBook(id) {
  try {
    model.$set('currBookId', id)
    model.loadBook(id)
    yield take('book/loadBook@end')
    model.getLayoutInfo(id)
    yield take('book/getLayoutInfo@end')
    const { book } = yield select()
    const bookNodes = book.bookNodes[id]
    const bookLayoutInfo = book.bookLayouts[id]
    const result = groupPageFromChapters(bookNodes, bookLayoutInfo, 700)
    model.putBookPages(result)
    const progress = yield getRemoteProgress()
    model.$set('bookReady', true)
    model.goToProgress(progress)
    yield take('book/goToProgress@end')
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
  yield db.ref('progress')
    .child(bookId)
    .update({
      progress,
      updatedAt: new Date().valueOf()
    })
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
      scrollMode: true,
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
    goToProgress
  },
  computations: {
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
