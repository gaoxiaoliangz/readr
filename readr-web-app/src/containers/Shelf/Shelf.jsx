import React, { Component } from 'react'
import { createSelector } from 'reselect'
import { Modal } from 'antd'
import PT from 'prop-types'
import { connect } from 'react-redux'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import BookList from './BookList'
import {
  fetchBooks, downloadBook, getLocalBooks,
  uploadBook, registerOwnedBooksWatcher, delBook
} from '../../actions'
import FileUploader from '../../components/FileUploader/FileUploader'

const confirm = Modal.confirm

class Shelf extends Component {
  static propTypes = {
    shelfBooks: PT.array.isRequired,
    isUploadingBook: PT.bool.isRequired,
    books: PT.object.isRequired,
    fetchBooks: PT.func.isRequired,
    downloadBook: PT.func.isRequired,
    getLocalBooks: PT.func.isRequired,
    uploadBook: PT.func.isRequired,
    registerOwnedBooksWatcher: PT.func.isRequired,
    delBook: PT.func.isRequired
  }

  componentDidMount() {
    this.props.fetchBooks()
    this.props.getLocalBooks()
    this.props.registerOwnedBooksWatcher()
  }

  handleChange = e => {
    const file = e.target.files[0]
    this.props.uploadBook(file)
  }

  delBook = id => {
    confirm({
      title: `Are you sure to delete book ${this.props.books.entries[id].title}`,
      onOk: () => {
        this.props.delBook(id)
      }
    })
  }

  renderUploader() {
    return (
      <FileUploader
        accept=".epub"
        onChange={this.handleChange}
        style={{
          display: 'block'
        }}
      >
        <div styleName="uploader">
          <h2>选择书籍（.epub 文件）</h2>
          <p>你上传的书籍仅对你自己可见</p>
        </div>
      </FileUploader>
    )
  }

  render() {
    const { shelfBooks, isUploadingBook } = this.props
    return (
      <div className="page-shelf">
        <BrandingContainer dark={false} />
        <div styleName="content" className="container">
          {
            isUploadingBook && 'uploading...'
          }
          <BookList
            prependList={[this.renderUploader()]}
            books={shelfBooks}
            onDelBook={book => {
              this.delBook(book.id)
            }}
            onDownloadBook={book => {
              this.props.downloadBook(book.id)
            }}
          />
        </div>
        <Colophon />
      </div>
    )
  }
}

const shelfBooksSelector = createSelector(
  state => state.shelf.books.pagination.entries,
  state => state.shelf.books.entries,
  state => state.localBooks,
  state => state.shelf.downloadStatus,
  (entries = [], books = {}, localBooks = {}, downloadStatus = {}) => {
    return entries.map(id => {
      return {
        ...books[id],
        downloaded: Boolean(localBooks[id]),
        downloadStatus: downloadStatus[id]
      }
    })
  }
)

export default connect(
  state => {
    return {
      ...state.shelf,
      shelfBooks: shelfBooksSelector(state),
      isUploadingBook: state.isUploadingBook
    }
  },
  {
    fetchBooks,
    downloadBook,
    getLocalBooks,
    uploadBook,
    registerOwnedBooksWatcher,
    delBook
  }
)(Shelf)
