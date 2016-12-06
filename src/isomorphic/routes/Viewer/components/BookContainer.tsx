import React, { Component } from 'react'
import BookPages from './BookPages'
import ViewerScrollbar from './ViewerScrollbar'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectors from '../../../store/selectors'
import NavArrow from './NavArrow'
import * as actions from '../../../store/actions'
import CSSModules from 'react-css-modules'
const styles = require('./BookContainer.scss')

interface Props {
  allPages: TBookPage[]
  pageHeight: number
  onProgressChange?: (newProgress: number) => void
  showPageInfo?: boolean
  pageLimit: number
}

interface AllProps extends Props {
  percentage?: number
  pageNo?: number
  theme?: string
  isScrollMode?: boolean
  isCalcMode?: boolean
  actions?: typeof actions
}

const mapStateToProps = state => {
  const { bookId, theme, isScrollMode, isCalcMode } = selectors.viewer.config(state)
  const { percentage, pageNo } = selectors.viewer.progress(bookId)(state)

  return {
    percentage,
    pageNo,
    theme,
    isScrollMode,
    isCalcMode
  }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles)
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
    const { allPages, pageHeight, onProgressChange, isScrollMode } = this.props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight
    const scrollTop = document.body.scrollTop

    if (onProgressChange && isScrollMode) {
      onProgressChange(scrollTop / totalHeight)
    }
  }

  handleForward() {
    const { allPages, pageNo } = this.props
    this.props.actions.viewerJumpTo((pageNo + 1) / allPages.length)
  }

  handlebackward() {
    const { allPages, pageNo } = this.props
    this.props.actions.viewerJumpTo((pageNo - 1) / allPages.length)
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
    const { allPages, pageHeight, showPageInfo, pageLimit, pageNo,
      theme, isScrollMode, isCalcMode } = this.props

    let startPageIndex

    startPageIndex = pageNo - Math.ceil(pageLimit / 2)
    startPageIndex = startPageIndex < 0 ? 0 : startPageIndex

    const endPageIndex = startPageIndex + pageLimit

    const divHeight = isCalcMode
      ? 'auto'
      : (
        isScrollMode
          ? allPages.length * pageHeight
          : pageHeight
      )

    return (
      <div styleName={theme.toLowerCase()} style={{ height: divHeight }}>
        <BookPages
          pages={_.slice(allPages, startPageIndex, endPageIndex) as TBookPage[]}
          />
        <NavArrow
          forward={this.handleForward.bind(this)}
          backward={this.handlebackward.bind(this)}
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
