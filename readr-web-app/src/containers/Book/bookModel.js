import { createModel } from '@gxl/redux-model'
import { FETCH_STATUS } from '../../constants'
import createDbModel from '../../local-db'
import uuid from '../../utils/uuid'

const { firebase } = window
const db = firebase.database()
const store = firebase.storage()
const dbModel = createDbModel('books')
const NAMESPACE = 'book'

const model = createModel({
  namespace: NAMESPACE,
  state: {

  },
  effects: {
  },
  computations: {
  }
})

export default model
