import PT from 'prop-types'
import React, { Component } from 'react'
import _ from 'lodash'
import BookPage from './BookPage'
import './ScrollableBookPage.scss'

class ScrollableBookPage extends Component {
  static propTypes = {
    progress: PT.number.isRequired,
    pages: PT.array.isRequired,
    config: PT.object.isRequired,
    onProgressChange: PT.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleScroll = _.debounce(this.handleScroll.bind(this), 100)
  }

  shouldComponentUpdate(nextProps) {
    const { pages, progress } = nextProps
    const currPage = Math.round(progress * pages.length)
    console.log(currPage, this.currPage)
    return this.currPage !== currPage
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // todo: debounce
  handleScroll() {
    const scrollTop = window.document.documentElement.scrollTop
    // todo: more accurate
    const progress = scrollTop / this.totalHeight
    this.props.onProgressChange(progress)
  }

  render() {
    console.log('render')
    const { pages, config: { pageHeight }, progress } = this.props
    const totalHeight = pages.length * pageHeight
    const wrapStyle = {
      height: totalHeight,
      position: 'relative'
    }
    this.totalHeight = totalHeight
    const currPage = Math.round(progress * pages.length)
    const gap = 5
    let start = currPage - gap
    start = start >= 0 ? start : 0
    const pagesToRender = pages.slice(start, currPage + gap)
    this.currPage = currPage
    const pageWrapStyle = pageNo => ({
      position: 'absolute',
      top: (pageNo - 1) * pageHeight
    })
    return (
      <div style={wrapStyle} styleName="pages">
        {
          pagesToRender.map(page => {
            const pageNo = page.pageNo
            return (
              <div key={page.pageNo} style={pageWrapStyle(pageNo)}>
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
