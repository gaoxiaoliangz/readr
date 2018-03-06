import { createModel } from '@gxl/redux-model'
import { select, take } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
// import createDbModel from '../../local-db'
// import uuid from '../../utils/uuid'
import shelfModel from '../Shelf/shelfModel'
import { htmlStringToNodes } from './utils'
import { groupPageFromChapters } from './layout/paging'

// const { firebase } = window
// const db = firebase.database()
// const store = firebase.storage()
// const dbModel = createDbModel('books')
const NAMESPACE = 'book'

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
    clientCurrPage: 1,
    clientProgress: 0,
    remoteProgress: 0,
    showTopPanel: false,
  },
  effects: {
    *initBook(id) {
      try {
        this.$set('currBookId', id)
        this.loadBook(id)
        yield take('book/loadBook@end')
        this.getLayoutInfo(id)
        yield take('book/getLayoutInfo@end')
        const { book } = yield select()
        const bookNodes = book.bookNodes[id]
        const bookLayoutInfo = book.bookLayouts[id]
        const result = groupPageFromChapters(bookNodes, bookLayoutInfo, 700)
        this.putBookPages(result)
        yield take('book/putBookPages')
        this.getProgress()
        yield take('book/getProgress@end')
        this.$set('clientCurrPage', 11)
        this.$set('bookReady', true)
      } catch (error) {
        console.error(error)
      }
    },
    *loadBook(id) {
      this.$set('bookStatus', FETCH_STATUS.FETCHING)
      try {
        shelfModel.getLocalBooks()
        yield take('shelf/getLocalBooks@end')
        const state = yield select()
        if (!state.shelf.localBooks[id]) {
          shelfModel.downloadBook(id)
          yield take('shelf/downloadBook@end')
          yield take('shelf/getLocalBooks@end')
        }
        const state2 = yield select()
        const book = state2.shelf.localBooks[id]
        const sectionsOfNodes = book.content.map(section => {
          return {
            sectionId: section.id,
            nodes: htmlStringToNodes(section.htmlString)
          }
        })
        this.$set(['bookNodes', id], sectionsOfNodes)
        this.$set('bookStatus', FETCH_STATUS.SUCCESS)
      } catch (error) {
        console.error(error)
        this.$set('bookStatus', FETCH_STATUS.FAILURE)
      }
    },
    *getLayoutInfo() {
      this.$set('isEstimatingLayout', true)
      yield take('book/putLayoutInfo')
      this.$set('isEstimatingLayout', false)
    },
    *getProgress(id) {
      this.putRemoteProgress()
      yield
    },
    *updateProgress(id) {

    },
    *goToPage() {

    },
    // *goToProgress(progress) {
    //   if (progress) {

    //   }

    // }
  },
  computations: {
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
    }
  }
})

export default model
