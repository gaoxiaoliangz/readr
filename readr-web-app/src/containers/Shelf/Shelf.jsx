import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { createSelector } from 'reselect'
import { Spin, Icon, Modal } from 'antd'
import PT from 'prop-types'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './Shelf.scss'
import model from './shelfModel'
import { FETCH_STATUS } from '../../constants'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const { firebase } = window
const confirm = Modal.confirm

class Shelf extends Component {
  static propTypes = {
    booksStatus: PT.string.isRequired,
    shelfBooks: PT.array.isRequired,
    downloadStatus: PT.object.isRequired,
    isUploadingBook: PT.bool.isRequired,
    books: PT.object.isRequired
  }

  componentDidMount() {
    firebase.database().ref('bookInfo')
      .limitToLast(100)
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

  render() {
    const { booksStatus, shelfBooks, downloadStatus, isUploadingBook } = this.props
    const loading = booksStatus === FETCH_STATUS.FETCHING
    return (
      <div className="page-shelf">
        <BrandingContainer innerProps={{ dark: true }} />
        <div styleName="content">
          <input type="file" onChange={this.handleChange} />
          {
            isUploadingBook && 'uploading...'
          }
          {
            loading
              ? <Spin indicator={antIcon} />
              : _.map(shelfBooks, (book) => {
                return (
                  <div key={book.id}>
                    <Link to={'/book/' + book.id}>{book.title}</Link>
                    <div onClick={() => this.delBook(book.id)}>delete</div>
                    {
                      downloadStatus[book.id] === FETCH_STATUS.FETCHING
                        ? 'downloading'
                        : (book.downloaded
                          ? 'downloaded'
                          : (
                            <div onClick={() => {
                              model.downloadBook(book.id)
                            }}>
                              download book
                            </div>
                          )
                        )
                    }
                  </div>
                )
              })
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
    (entries = [], books = {}, localBooks = {}) => {
      return entries.map(id => {
        return {
          ...books[id],
          downloaded: Boolean(localBooks[id])
        }
      })
    }
  )
  return {
    ...state.shelf,
    shelfBooks: shelfBooks(state.shelf)
  }
})
