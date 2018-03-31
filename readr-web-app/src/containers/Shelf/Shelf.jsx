import React, { Component } from 'react'
import { createSelector } from 'reselect'
import { Modal } from 'antd'
import PT from 'prop-types'
import { connect } from 'react-redux'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
// import model from './shelfModel'
import BookList from './BookList'
import { fetchBooks } from '../../actions'
import FileUploader from '../../components/FileUploader/FileUploader'

const confirm = Modal.confirm

class Shelf extends Component {
  static propTypes = {
    shelfBooks: PT.array.isRequired,
    isUploadingBook: PT.bool.isRequired,
    books: PT.object.isRequired,
    fetchBooks: PT.func.isRequired
  }

  componentDidMount() {
    this.props.fetchBooks()
    // model.regWatcher()
    // model.fetchBooks()
    // model.getLocalBooks()
  }

  handleChange = e => {
    const file = e.target.files[0]
    model.uploadBook(file)
  }

  delBook = id => {
    confirm({
      title: `Are you sure to delete book ${this.props.books[id].title}`,
      onOk: () => {
        model.delBook(id)
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
              model.downloadBook(book.id)
            }}
          />
        </div>
        <Colophon />
      </div>
    )
  }
}

export default connect(
  state => {
    const shelfBooks = createSelector(
      s => s.bookPagination.entries,
      s => s.books,
      s => s.localBooks,
      s => s.downloadStatus,
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
    return {
      ...state.shelf,
      shelfBooks: shelfBooks(state.shelf)
    }
  },
  {
    fetchBooks
  }
)(Shelf)
