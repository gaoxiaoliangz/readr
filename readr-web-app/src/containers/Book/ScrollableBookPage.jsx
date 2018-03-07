import PT from 'prop-types'
import React, { Component } from 'react'
import _ from 'lodash'
import BookPage from './BookPage'
import './ScrollableBookPage.scss'
import { progressToPage, scrollTopToProgress, progressToScrollTop } from './progress'

const getScreenHeight = () => window.innerHeight
const scrollTo = scrollTop => {
  document.documentElement.scrollTop = scrollTop
}

class ScrollableBookPage extends Component {
  static propTypes = {
    progress: PT.number.isRequired,
    pages: PT.array.isRequired,
    config: PT.object.isRequired,
    onProgressChange: PT.func.isRequired,
    disableScrollListener: PT.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.handleScroll = _.debounce(this.handleScroll.bind(this), 100)
  }

  shouldComponentUpdate(nextProps) {
    const { pages, progress } = nextProps
    const currPage = Math.round(progress * pages.length)
    // todo: config update
    console.log(currPage, this.currPage)
    return this.currPage !== currPage
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.disableScrollListener && nextProps.progress !== this.props.progress) {
      const totalHeight = nextProps.pages.length * nextProps.config.pageHeight
      const scrollTop = progressToScrollTop(nextProps.progress, getScreenHeight(), totalHeight)
      console.log('now scroll', scrollTop, 'this.props.disableScrollListener', this.props.disableScrollListener)
      scrollTo(scrollTop)
    }
  }

  handleScroll() {
    if (!this.props.disableScrollListener) {
      const scrollTop = window.document.documentElement.scrollTop
      // const progress = scrollTop / this.totalHeight
      const progress = scrollTopToProgress(scrollTop, getScreenHeight(), this.totalHeight)
      this.props.onProgressChange(progress)
      console.log('onProgressChange')
    } else {
      console.log('onProgressChange scroll disabled')
    }
  }

  render() {
    console.log('render')
    const { pages, config: { pageHeight, contentWidth }, progress } = this.props
    const totalHeight = pages.length * pageHeight
    const wrapStyle = {
      height: totalHeight,
      maxWidth: contentWidth
    }
    // todo: use getter
    this.totalHeight = totalHeight
    this.pageHeight = pageHeight
    const currPage = progressToPage(progress, pages.length)
    const gap = 5
    let start = currPage - gap
    start = start >= 0 ? start : 0
    const pagesToRender = pages.slice(start, currPage + gap)
    // todo
    this.currPage = currPage
    return (
      <div style={wrapStyle} styleName="pages">
        {
          pagesToRender.map(page => {
            const pageNo = page.pageNo
            const pageWrapStyle = {
              position: 'absolute',
              top: (pageNo - 1) * pageHeight
            }
            return (
              <div key={page.pageNo} style={pageWrapStyle}>
                <BookPage page={page} config={this.props.config} />
                <div styleName="page-no">{pageNo}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ScrollableBookPage
