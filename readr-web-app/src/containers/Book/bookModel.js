import { createModel } from '@gxl/redux-model'
import { select, take } from 'redux-saga/effects'
import { FETCH_STATUS } from '../../constants'
import createDbModel from '../../local-db'
import uuid from '../../utils/uuid'
import shelfModel from '../Shelf/shelfModel'

const { firebase } = window
const db = firebase.database()
const store = firebase.storage()
const dbModel = createDbModel('books')
const NAMESPACE = 'book'

const model = createModel({
  namespace: NAMESPACE,
  state: {
    bookStatus: FETCH_STATUS.NONE
  },
  effects: {
    *loadBook(id) {
      this.$set('bookStatus', FETCH_STATUS.FETCHING)
      try {
        shelfModel.getLocalBooks()
        yield take('shelf/getLocalBooks@end')
        const state = yield select()
        if (!state.shelf.localBooks[id]) {
          shelfModel.downloadBook(id)
        }
        this.$set('bookStatus', FETCH_STATUS.SUCCESS)
      } catch (error) {
        this.$set('bookStatus', FETCH_STATUS.FAILURE)
      }
    }
  },
  computations: {
  }
})

export default model
