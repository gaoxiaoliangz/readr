import { createModel } from '@gxl/redux-model'
import _ from 'lodash'
import { put } from 'redux-saga/effects'
import { uploadBook, fetchUserOwnedBooks, delBook, fetchBook, SubscriptionManager, subscriptions } from '../../service'
import { FETCH_STATUS } from '../../constants'
import createDbModel from '../../local-db'
import { toArray } from '../utils'
import appModel from '../appModel'

const dbModel = createDbModel('books')
const NAMESPACE = 'shelf'
const subs = new SubscriptionManager()
const { startLoading, stopLoading } = appModel.actionCreators

const model = createModel({
  namespace: NAMESPACE,
  state: {
    booksStatus: FETCH_STATUS.NONE,
    downloadStatus: {},
    books: {},
    localBooks: {},
    bookPagination: {
      entries: [],
    },
    isUploadingBook: false,
  },
  effects: {
    *fetchBooks() {
      yield put($set('booksStatus', FETCH_STATUS.FETCHING))
      yield put(startLoading('books'))
      try {
        const books = yield fetchUserOwnedBooks().then(toArray)
        yield put($set('booksStatus', FETCH_STATUS.SUCCESS))
        yield put(putBooks(books))
        books.forEach(book => {
          subs.add(`books/${book.id}`, (data, first) => {
            if (!first) {
              model.fetchBooks()
            }
          })
        })
      } catch (error) {
        console.error(error)
        yield put($set('booksStatus', FETCH_STATUS.FAILURE))
      } finally {
        yield put(stopLoading('books'))
      }
    },
    *regWatcher() {
      let isReg = true
      subscriptions.onUserOwnedBooksChanged(snapshot => {
        const books = snapshot.val()
        if (!isReg) {
          _.keys(books).forEach(id => {
            subs.add(`books/${id}`, () => {
              if (!isReg) {
                model.fetchBooks()
              }
            })
          })
        }
        isReg = false
      })
      yield
    },
    *delBook(id) {
      try {
        yield delBook(id)
        yield dbModel.remove(id)
      } catch (error) {
        console.error(error)
      }
    },
    *downloadBook(id) {
      yield put($set(['downloadStatus', id], FETCH_STATUS.FETCHING))
      try {
        const book = yield fetchBook(id, true)
        yield dbModel.add(book)
        yield put($set(['downloadStatus', id], FETCH_STATUS.SUCCESS))
        yield put(getLocalBooks())
      } catch (error) {
        yield put($set(['downloadStatus', id], FETCH_STATUS.FAILURE))
      }
    },
    *getLocalBooks() {
      const books = yield dbModel.listAll()
      yield put(putLocalBooks(books))
    },
    *uploadBook(file) {
      yield put($set('isUploadingBook', true))
      yield uploadBook(file)
      yield put($set('isUploadingBook', false))
    }
  },
  computations: {
    putLocalBooks(state, localBooks) {
      return {
        ...state,
        localBooks
      }
    },
    putBooks(state, books) {
      const entries = books.map(b => b.id)
      const booksObj = books.reduce((obj, book) => {
        return {
          ...obj,
          [book.id]: book
        }
      }, {})
      return {
        ...state,
        books: booksObj,
        bookPagination: {
          entries
        }
      }
    }
  }
})

const { $set, putBooks, getLocalBooks, putLocalBooks } = model.actionCreators

export default model
