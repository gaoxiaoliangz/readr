import React, { Component } from 'react'
// import { Link } from 'react-router'
// import * as styles from '../constants/STYLES'
import BookPage from './BookPage'
import * as utils from './BookPageList.utils'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page-list.scss')
import _ from 'lodash'

interface IProps {
  nodes: string[]
  nodeHeights: number[]
  pageCount: number
  isScrollMode?: boolean
  initialPage?: number
  initialProgress?: number
  pageHeight: number
  onProgressChange: (newProgress: number) => void
}

interface IState {
  scrollTop?: number
  currentPage?: number
  _calculated?: {
    pages?: utils.TPageList
    totalHeight?: number
  }
}

@CSSModules(styles)
class BookPageList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      _calculated: {
        pages: [],
        totalHeight: 0
      },
      scrollTop: 0,
      currentPage: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const { _calculated: { pages, totalHeight } } = this.state
    const { onProgressChange } = this.props

    const scrollTop = document.body.scrollTop
    const currentPage = utils.percentageToPage(scrollTop / totalHeight, pages.length)

    onProgressChange(scrollTop / totalHeight)

    this.setState({
      currentPage
    })
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleScroll)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  calcPages(fn?) {
    const { nodeHeights, nodes, pageHeight } = this.props
    const pages = utils.groupNodesByPage(nodes, nodeHeights, 900)

    this.setState({
      _calculated: {
        pages,
        totalHeight: pages.length * pageHeight
      }
    }, () => {
      if (fn) fn()
    })
  }

  componentDidMount() {
    const { nodeHeights, nodes, pageHeight, initialPage, initialProgress } = this.props
    this.calcPages(() => {
      const { _calculated: { totalHeight }} = this.state
      let scrollTop = 0

      if (initialProgress) {
        scrollTop = totalHeight * initialProgress
      } else if (initialPage) {
        scrollTop = pageHeight * (initialPage - 1)
      }
       document.body.scrollTop = scrollTop
    })
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    // let style = styles.BOOK_HD_STYLE
    // if(this.props.view.mode === "MOBILE") {
    //   style = styles.BOOK_MOBILE_STYLE
    // }

    // if(!this.props.isCalculated) {
    //   style.height = "100%"
    // }

    const { _calculated: { pages, totalHeight }, currentPage } = this.state
    const { pageCount, pageHeight } = this.props
    const startPageIndex = currentPage - 1
    const endPageIndex = startPageIndex + pageCount

    return (
      <ul styleName="pages" style={{ height: totalHeight }}>
        {
          _.slice(pages, startPageIndex, endPageIndex).map((page, index) => {
            return (
              <BookPage
                key={index}
                page={page}
                pageHeight={pageHeight}
                />
            )
          })
        }
      </ul>
    )
  }
}

export default BookPageList
