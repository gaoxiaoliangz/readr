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
    disableScrollListener: PT.bool
  }

  static defaultProps = {
    disableScrollListener: false
  }

  constructor(props) {
    super(props)
    this.handleScroll = _.debounce(this.handleScroll.bind(this), 100)
  }

  shouldComponentUpdate(nextProps) {
    const { pages, progress } = nextProps
    const currPage = Math.round(progress * pages.length)
    // todo: config update
    return this.currPage !== currPage
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.progress !== this.props.progress) {
      const totalHeight = nextProps.pages.length * nextProps.config.pageHeight
      const scrollTop = progressToScrollTop(nextProps.progress, getScreenHeight(), totalHeight)
      scrollTo(scrollTop)
    }
  }

  handleScroll() {
    if (!this.props.disableScrollListener) {
      const scrollTop = window.document.documentElement.scrollTop
      const progress = scrollTopToProgress(scrollTop, getScreenHeight(), this.totalHeight)
      this.props.onProgressChange(progress)
    } else {
      // maybe
      // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
    }
  }

  get totalHeight() {
    const { pages, config: { pageHeight } } = this.props
    return pages.length * pageHeight
  }

  get pageHeight() {
    return this.props.config.pageHeight
  }

  get currPage() {
    return progressToPage(this.props.progress, this.props.pages.length)
  }

  render() {
    const { pages, config: { pageHeight, contentWidth } } = this.props
    const wrapStyle = {
      height: this.totalHeight,
      maxWidth: contentWidth
    }
    const gap = 5
    const currPage = this.currPage
    let start = currPage - gap
    start = start >= 0 ? start : 0
    const pagesToRender = pages.slice(start, currPage + gap)
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
