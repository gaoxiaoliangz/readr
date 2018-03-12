import { createModel } from '@gxl/redux-model'
import { uploadBook, fetchUserOwnedBooks, delBook, fetchBook } from '../../service'
import { FETCH_STATUS } from '../../constants'
import createDbModel from '../../local-db'
import { toArray } from '../utils'
import appModel from '../appModel'

const dbModel = createDbModel('books')
const NAMESPACE = 'shelf'

export function* fetchBooks() {
  model.$set('booksStatus', FETCH_STATUS.FETCHING)
  appModel.startLoading('books')
  try {
    const books = yield fetchUserOwnedBooks().then(toArray)
    model.$set('booksStatus', FETCH_STATUS.SUCCESS)
    model.putBooks(books)
  } catch (error) {
    console.error(error)
    model.$set('booksStatus', FETCH_STATUS.FAILURE)
  } finally {
    appModel.stopLoading('books')
  }
}

export function* downloadBook(id) {
  model.$set(['downloadStatus', id], FETCH_STATUS.FETCHING)
  try {
    const book = yield fetchBook(id, true)
    yield dbModel.add(book)
    model.$set(['downloadStatus', id], FETCH_STATUS.SUCCESS)
    yield getLocalBooks()
  } catch (error) {
    model.$set(['downloadStatus', id], FETCH_STATUS.FAILURE)
  }
}

export function* getLocalBooks() {
  const books = yield dbModel.listAll()
  model.putLocalBooks(books)
}

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
    fetchBooks,
    *delBook(id) {
      try {
        yield delBook(id)
        yield dbModel.remove(id)
      } catch (error) {
        console.error(error)
      }
    },
    downloadBook,
    getLocalBooks,
    *uploadBook(file) {
      model.$set('isUploadingBook', true)
      yield uploadBook(file)
      model.$set('isUploadingBook', false)
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

export default model
