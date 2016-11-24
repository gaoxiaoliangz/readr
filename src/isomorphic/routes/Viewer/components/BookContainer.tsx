import React, { Component } from 'react'
import BookPages from './BookPages'
import ViewerScrollbar from './ViewerScrollbar'
import * as utils from '../Viewer.utils'
import _ from 'lodash'

interface Props {
  allPages: TBookPage[]
  isScrollMode?: boolean
  initialPage?: number
  initialProgress?: number
  pageHeight: number
  onProgressChange?: (newProgress: number) => void
  fluid: boolean
  showPageInfo?: boolean
  pageLimit: number
}

interface State {
  scrollTop?: number
  currentPage?: number
}

class BookContainer extends Component<Props, State> {

  handleScrollLazily: any

  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
      currentPage: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScrollLazily = _.debounce(this.handleScroll, 200, {
      maxWait: 1000
    })
  }

  handleScroll() {
    const { allPages, pageHeight, onProgressChange } = this.props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight
    const scrollTop = document.body.scrollTop
    const currentPage = utils.percentageToPage(scrollTop / totalHeight, allPages.length)

    if (onProgressChange) {
      onProgressChange(scrollTop / totalHeight)
    }

    this.setState({
      currentPage
    })
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleScrollLazily)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScrollLazily)
  }

  scrollPage(props = this.props) {
    const { allPages, pageHeight, initialPage, initialProgress } = props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight
    let scrollTop = 0

    if (initialProgress) {
      scrollTop = totalHeight * initialProgress
    } else if (initialPage) {
      scrollTop = pageHeight * (initialPage - 1)
    }

    document.body.scrollTop = scrollTop
  }

  componentWillReceiveProps(nextProps, nextState) {
    const initialProgressChanged = this.props.initialProgress !== nextProps.initialProgress

    if (initialProgressChanged) {
      this.scrollPage(nextProps)
    }
  }

  componentDidMount() {
    this.scrollPage()
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    const { currentPage } = this.state
    const { allPages, pageHeight, fluid, showPageInfo, pageLimit } = this.props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight

    let startPageIndex

    startPageIndex = currentPage - Math.ceil(pageLimit / 2)
    startPageIndex = startPageIndex < 0 ? 0 : startPageIndex

    const endPageIndex = startPageIndex + pageLimit

    return (
      <div style={{ height: totalHeight }}>
        <BookPages
          pages={_.slice(allPages, startPageIndex, endPageIndex) as TBookPage[]}
          pageHeight={pageHeight}
          fluid={fluid}
          totalHeight={totalHeight}
          />
        <ViewerScrollbar
          visible={showPageInfo}
          current={currentPage}
          total={allPages.length}
          />
      </div>
    )
  }
}

export default BookContainer
