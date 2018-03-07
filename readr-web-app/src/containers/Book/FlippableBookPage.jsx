import React, { Component } from 'react'
import PT from 'prop-types'
import BookPage from './BookPage'
import './FlippableBookPage.scss'
import { progressToPage, pageToProgress } from './progress'

class FlippableBookPage extends Component {
  static propTypes = {
    progress: PT.number.isRequired,
    pages: PT.array.isRequired,
    config: PT.object.isRequired,
    bookInfo: PT.object.isRequired,
    onProgressChange: PT.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  goToPage = pageNo => {
    this.props.onProgressChange(pageToProgress(pageNo, this.props.pages.length))
    if (!this.props.config.scrollMode) {
      document.documentElement.scrollTop = 0
    }
  }

  nextPage = () => {
    this.goToPage(this.clientCurrPage + 1)
  }

  prevPage = () => {
    this.goToPage(this.clientCurrPage - 1)
  }

  handleKeydown = e => {
    switch (e.keyCode) {
      case 39:
        this.nextPage()
        break

      case 37:
        this.prevPage()
        break

      default:
        break
    }
  }

  renderNav = () => {
    return (
      <div styleName="nav-wrap">
        <div styleName="nav-inner">
          <div styleName="prev" onClick={this.prevPage} />
          <div styleName="next" onClick={this.nextPage} />
        </div>
      </div>
    )
  }

  render() {
    const { pages, config: { contentWidth }, bookInfo: { title }, progress } = this.props
    const wrapStyle = {
      maxWidth: contentWidth || 'auto'
    }
    const clientCurrPage = progressToPage(progress, pages.length)
    this.clientCurrPage = clientCurrPage

    return (
      <div styleName="page--flip" style={wrapStyle}>
        {this.renderNav()}
        <div styleName="title">{title}</div>
        <BookPage
          page={pages[clientCurrPage - 1]}
          config={this.props.config}
        />
        <div styleName="page-no">{clientCurrPage}</div>
      </div>
    )
  }
}

export default FlippableBookPage
