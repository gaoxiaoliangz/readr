import { createModel } from '@gxl/redux-model'
import { select, take } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
// import createDbModel from '../../local-db'
// import uuid from '../../utils/uuid'
import shelfModel from '../Shelf/shelfModel'
import { htmlStringToNodes } from './layout/nodes'
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
    // clientCurrPage: 1,
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
        // this.$set('clientCurrPage', 11)
        this.$set('bookReady', true)
        this.goToProgress(0.5)
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
    *goToProgress(progress) {
      try {
        const { book } = yield select()
        if (book.config.scrollMode) {
          this.$set('disableScrollListener', true)
          yield take('book/$set:disableScrollListener')
        }
        this.setClientProgress(progress)
        yield take('book/setClientProgress')
        console.log('unlock')
        if (book.config.scrollMode) {
          this.$set('disableScrollListener', false)
          // setTimeout(() => {
          // }, 1000)
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
  computations: {
    setClientProgress(state, clientProgress) {
      // let pageNo = progress
      // let clientProgress = progress
      // const bookId = state.book.currBookId
      // const totalPages = state.book.bookPages[bookId].length
      // if (progress > 0 && progress < 1) {
      //   pageNo = Math.round(totalPages * progress)
      // } else {
      //   clientProgress = progress / totalPages
      // }
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
    }
  }
})

export default model
