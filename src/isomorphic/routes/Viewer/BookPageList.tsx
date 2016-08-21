import React, { Component } from 'react'
import BookPage from './BookPage'
import * as utils from './BookPageList.utils'
import _ from 'lodash'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page-list.scss')

interface IProps {
  nodes: string[]
  nodeHeights: number[]
  pageCount: number
  isScrollMode?: boolean
  initialPage?: number
  initialProgress?: number
  pageHeight: number
  onProgressChange?: (newProgress: number) => void
  fluid: boolean
  isCalcMode?: boolean
}

interface IState {
  scrollTop?: number
  currentPage?: number
}

@CSSModules(styles)
class BookPageList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
      currentPage: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.deboundedHandleScroll = _.debounce(this.handleScroll, 200, {
      maxWait: 1000
    })
  }

  bookPageListDom: HTMLUListElement
  bookPage: any
  deboundedHandleScroll: any

  handleScroll() {
    if (!this.props.isCalcMode) {
      const { pages, totalHeight } = this.calcPages()
      const { onProgressChange } = this.props

      const scrollTop = document.body.scrollTop
      const currentPage = utils.percentageToPage(scrollTop / totalHeight, pages.length)

      if (onProgressChange) {
        onProgressChange(scrollTop / totalHeight)
      }

      this.setState({
        currentPage
      })
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', this.deboundedHandleScroll)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.deboundedHandleScroll)
  }

  calcPages() {
    // todo: 添加缓存
    const { nodeHeights, nodes, pageHeight } = this.props
    const pages = utils.groupNodesByPage(nodes, nodeHeights, pageHeight)

    return { pages, totalHeight: pages.length * pageHeight }
  }

  componentDidMount() {
    const { pageHeight, initialPage, initialProgress } = this.props
    const { totalHeight } = this.calcPages()
    let scrollTop = 0

    if (initialProgress) {
      scrollTop = totalHeight * initialProgress
    } else if (initialPage) {
      scrollTop = pageHeight * (initialPage - 1)
    }

    document.body.scrollTop = scrollTop
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    const { pages, totalHeight } = this.calcPages()
    const { currentPage } = this.state
    const { pageCount, pageHeight, fluid } = this.props
    const startPageIndex = currentPage - 1
    const endPageIndex = startPageIndex + pageCount
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid
    })

    return (
      <ul ref={ref => { this.bookPageListDom = ref } } styleName={className} style={{ height: totalHeight }}>
        {
          _.slice(pages, startPageIndex, endPageIndex).map((page, index) => {
            return (
              <BookPage
                key={index}
                page={page}
                pageHeight={pageHeight}
                fluid={fluid}
                ref={ref => { this.bookPage = ref } }
                />
            )
          })
        }
      </ul>
    )
  }
}

export default BookPageList
