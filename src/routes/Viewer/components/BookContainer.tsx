import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectors from '../../../selectors'
import * as actions from '../../../actions'
import BookPages from './BookPages'
import BookRaw from './BookRaw'
import styles from './BookContainer.scss'

interface OwnProps {
  allPages: TBookPage[]
  pageHeight: number
  pageLimit: number
}

interface StateProps {
  percentage?: number
  pageNo?: number
  theme?: string
  isScrollMode?: boolean
  isCalcMode?: boolean
  actions?: typeof actions
  showPageInfo?: boolean
}

const mapStateToProps = state => {
  const { bookId, theme, isScrollMode, isCalcMode } = selectors.viewer.config(state)
  const { percentage, pageNo } = selectors.viewer.progress(bookId)(state)
  const { show: showPageInfo } = selectors.viewer.progressComponent(state)

  return {
    showPageInfo,
    percentage,
    pageNo,
    theme,
    isScrollMode,
    isCalcMode
  }
}

@CSSModules(styles)
class BookContainer extends Component<OwnProps & StateProps, {}> {

  handleScrollLazily: any

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScrollLazily = _.debounce(this.handleScroll, 200, {
      maxWait: 1000
    })
  }

  handleScroll() {
    const { allPages, pageHeight, isScrollMode } = this.props
    const pageCount = allPages.length
    const totalHeight = pageCount * pageHeight
    const scrollTop = document.body.scrollTop

    if (isScrollMode) {
      this.props.actions.updateBookProgress(scrollTop / totalHeight)
    }
  }

  // handleForward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo(pageNo / allPages.length)
  //   document.body.scrollTop = 0
  // }

  // handlebackward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length)
  //   document.body.scrollTop = 0
  // }

  // addEventListeners() {
  //   window.addEventListener('scroll', this.handleScrollLazily)
  // }

  // removeEventListeners() {
  //   window.removeEventListener('scroll', this.handleScrollLazily)
  // }

  // componentDidMount() {
  //   this.addEventListeners()
  // }

  // componentWillUnmount() {
  //   this.removeEventListeners()
  // }

  render() {
    const { allPages, pageHeight, showPageInfo, pageLimit, pageNo,
      theme, isScrollMode, isCalcMode, bookFlesh } = this.props

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
        {
          isCalcMode
            ? (
              <BookRaw
                bookFlesh={bookFlesh}
              />
            )
            : (
              <BookPages
                pages={_.slice(allPages, startPageIndex, endPageIndex) as TBookPage[]}
              />
            )
        }
      </div>
    )
  }
}

export default connect<StateProps, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(BookContainer)
