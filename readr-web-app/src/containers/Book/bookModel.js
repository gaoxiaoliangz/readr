import { createModel } from '@gxl/redux-model'
import { select, take } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
// import createDbModel from '../../local-db'
// import uuid from '../../utils/uuid'
import shelfModel from '../Shelf/shelfModel'
import { htmlStringToNodes } from './utils'

// const { firebase } = window
// const db = firebase.database()
// const store = firebase.storage()
// const dbModel = createDbModel('books')
const NAMESPACE = 'book'

const model = createModel({
  namespace: NAMESPACE,
  state: {
    currBookId: null,
    bookStatus: FETCH_STATUS.NONE,
    bookNodes: {},
    bookLayouts: {},
    isEstimatingLayout: false,
  },
  effects: {
    *initBook(id) {
      this.$set('currBookId', id)
      this.loadBook(id)
      yield take('book/loadBook@end')
      this.getLayoutInfo(id)
      yield take('book/getLayoutInfo@end')
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

    },
    *updateProgress(id) {

    },
    *goToPage() {

    },
    *goToProgress() {

    }
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
    }
  }
})

export default model
