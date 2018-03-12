import React, { Component } from 'react'
import { createSelector } from 'reselect'
import { Spin, Icon, Modal } from 'antd'
import PT from 'prop-types'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import model from './shelfModel'
import { FETCH_STATUS } from '../../constants'
import BookList from './BookList'
import FileUploader from '../../components/FileUploader/FileUploader'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const { firebase } = window
const confirm = Modal.confirm

class Shelf extends Component {
  static propTypes = {
    booksStatus: PT.string.isRequired,
    shelfBooks: PT.array.isRequired,
    isUploadingBook: PT.bool.isRequired,
    books: PT.object.isRequired
  }

  componentDidMount() {
    firebase.database().ref('books')
      .on('value', () => {
        model.fetchBooks()
      })
    model.getLocalBooks()
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
      >
        <div styleName="uploader">
          <h2>选择书籍（.epub 文件）</h2>
          <p>你上传的书籍仅对你自己可见</p>
        </div>
      </FileUploader>
    )
  }

  render() {
    const { booksStatus, shelfBooks, isUploadingBook } = this.props
    const loading = booksStatus === FETCH_STATUS.FETCHING
    return (
      <div className="page-shelf">
        <BrandingContainer innerProps={{ dark: true }} />
        <div styleName="content">
          {
            isUploadingBook && 'uploading...'
          }
          {
            loading
              ? <Spin indicator={antIcon} />
              : (
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
              )
          }
        </div>
        <Colophon dark />
      </div>
    )
  }
}

export default model.connect(Shelf, state => {
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
})
