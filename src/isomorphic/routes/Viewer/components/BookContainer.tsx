import React, { Component } from 'react'
import BookPages from './BookPages'
import ViewerScrollbar from './ViewerScrollbar'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as selectors from '../../../store/selectors'

interface Props {
  allPages: TBookPage[]
  isScrollMode?: boolean
  pageHeight: number
  onProgressChange?: (newProgress: number) => void
  fluid: boolean
  showPageInfo?: boolean
  pageLimit: number
}

interface AllProps extends Props {
  percentage?: number
  pageNo?: number
}

const mapStateToProps = state => {
  const { bookId } = selectors.viewer.config(state)
  const { percentage, pageNo } = selectors.viewer.progress(bookId)(state)

  return {
    percentage,
    pageNo
  }
}

@connect<AllProps>(
  mapStateToProps
)
export default class BookContainer extends Component<AllProps, {}> {

  handleScrollLazily: any

  constructor(props) {
    super(props)
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

    if (onProgressChange) {
      onProgressChange(scrollTop / totalHeight)
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleScrollLazily)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScrollLazily)
  }

  componentDidMount() {
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    const { allPages, pageHeight, fluid, showPageInfo, pageLimit, pageNo } = this.props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight

    let startPageIndex

    startPageIndex = pageNo - Math.ceil(pageLimit / 2)
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
          current={pageNo}
          total={allPages.length}
          />
      </div>
    )
  }
}
