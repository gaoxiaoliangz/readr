import React, { Component } from 'react'
import BookPages from './BookPages'
import ViewerScrollbar from './ViewerScrollbar'
import * as utils from '../Viewer.utils'
import _ from 'lodash'
import { connect } from 'react-redux'
import {
  initializeViewerSuccess
} from '../../../store/actions'
interface Props {
  allPages: TBookPage[]
  isScrollMode?: boolean
  // initialPage?: number
  // initialProgress?: number
  pageHeight: number
  onProgressChange?: (newProgress: number) => void
  fluid: boolean
  showPageInfo?: boolean
  pageLimit: number
}

interface AllProps extends Props {
  percentage?: number
}

const mapStateToProps = state => {
  return {
    percentage: state.components.viewer.bookProgress.percentage
  }
}

@connect<AllProps>(
  mapStateToProps
)
export default class BookContainer extends Component<AllProps, {}> {

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
    // const currentPage = utils.percentageToPage(scrollTop / totalHeight, allPages.length)

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

  scrollPage(props = this.props) {
    const { allPages, pageHeight, percentage } = props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight

    document.body.scrollTop = percentage
      ? totalHeight * percentage
      : 0
  }

  componentWillReceiveProps(nextProps, nextState) {
    const percentageChanged = this.props.percentage !== nextProps.percentage

    if (percentageChanged) {
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
    const { allPages, pageHeight, fluid, showPageInfo, pageLimit, percentage } = this.props
    const pageCount = allPages.length
    const currentPage = Math.floor(pageCount * percentage) + 1
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
