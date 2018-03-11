import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import PT from 'prop-types'
import './Book.scss'
import Icon from '../../components/Icon/Icon'
import { BOOK_STATUS, FETCH_STATUS } from '../../constants'

const statusMap = {
  [BOOK_STATUS.PROCESSING]: 'Processing',
  [BOOK_STATUS.SUCCESS]: null,
  [BOOK_STATUS.FAILURE]: 'Failure',
}

export default class Book extends Component {
  static propTypes = {
    title: PT.string,
    author: PT.string,
    id: PT.string.isRequired,
    cover: PT.string,
    percentage: PT.number,
    onDelBook: PT.func.isRequired,
    onDownloadBook: PT.func.isRequired,
    to: PT.string,
    downloaded: PT.bool,
    downloadStatus: PT.string,
    status: PT.string.isRequired
  }

  render() {
    const { title, cover, percentage, to, author, onDelBook, id, onDownloadBook, status, downloaded, downloadStatus } = this.props
    const defaultTo = '/book/' + id
    return (
      <div styleName="book--card">
        <Link to={to || defaultTo} >
          {
            cover && (
              <div styleName="book-cover">
                <img src={cover} />
              </div>
            )
          }
          <div styleName="book-meta">
            <span title={title} className="text-overflow" styleName="book-name">{title || 'No title'}</span>
            <span styleName="book-author">{author || 'Unknown author'}</span>
            {
              !_.isUndefined(percentage) && (
                <span styleName="progress">已读 {(percentage * 100).toFixed(1)}%</span>
              )
            }
          </div>
        </Link>
        {
          onDelBook && (
            <div
              styleName="book-opt book-opt__del"
              onClick={() => {
                onDelBook(this.props)
              }}
            >
              <Icon name="trash" />
            </div>
          )
        }
        {
          !downloaded && downloadStatus !== FETCH_STATUS.FETCHING && onDownloadBook && (
            <div
              styleName="book-opt book-opt__download"
              onClick={() => {
                onDownloadBook(this.props)
              }}
            >
              Download
              {/* <Icon name="trash" /> */}
            </div>
          )
        }
        {
          downloadStatus && (
            <div>{downloadStatus}</div>
          )
        }
        {
          statusMap[status] && (
            <div styleName="status">{statusMap[status]}</div>
          )
        }
      </div>
    )
  }
}
