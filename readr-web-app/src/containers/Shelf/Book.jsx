import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import PT from 'prop-types'
import { Icon } from 'antd'
import './Book.scss'
import { BOOK_STATUS, FETCH_STATUS } from '../../constants'

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

  handleDownload = () => {
    this.props.onDownloadBook(this.props)
  }

  renderDownload() {
    const { downloaded, downloadStatus } = this.props

    const renderIcon = () => {
      switch (downloadStatus) {
        case FETCH_STATUS.FETCHING:
          return <Icon type="loading" spin style={{ fontSize: 16 }} />

        case FETCH_STATUS.FAILURE:
          return <Icon type="close-circle" style={{ fontSize: 16 }} onClick={this.handleDownload} />

        case FETCH_STATUS.SUCCESS:
          return <Icon type="check" style={{ fontSize: 16 }} />

        case undefined:
        case FETCH_STATUS.NONE:
        default:
          return <Icon type="download" style={{ fontSize: 16 }} onClick={this.handleDownload} />
      }
    }

    return (
      <div
        styleName="book-opt book-opt__download"
        onClick={() => {

        }}
      >
        {
          downloaded
            ? <Icon type="check" style={{ fontSize: 16 }} />
            : renderIcon()
        }
      </div>
    )
  }

  render() {
    const { title, cover, percentage, to, author, onDelBook, id, status } = this.props
    const defaultTo = '/book/' + id
    const isCloudProcessing = status === BOOK_STATUS.PROCESSING
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
          !isCloudProcessing && onDelBook && (
            <div
              styleName="book-opt book-opt__del"
              onClick={() => {
                onDelBook(this.props)
              }}
            >
              <Icon type="delete" style={{ fontSize: 16 }} />
            </div>
          )
        }
        {
          isCloudProcessing
            ? (
              <div styleName="processing">
                <Icon type="loading" spin style={{ fontSize: 16 }} />
              </div>
            )
            : this.renderDownload()
        }
      </div>
    )
  }
}
