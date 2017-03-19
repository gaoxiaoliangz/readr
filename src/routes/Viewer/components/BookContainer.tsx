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
  // allPages: TBookPage[]
  // pageHeight: number
  // pageLimit: number
}

interface StateProps {
  // percentage?: number
  // pageNo?: number
  // theme?: string
  // isScrollMode?: boolean
  // isCalcMode?: boolean
  actions?: typeof actions
  // showPageInfo?: boolean
  config: Viewer.Config
  computed: TBookPage[]
  bookContent: SelectedEntity
  bookId: string
}

const mapStateToProps = state => {
  // const { bookId, theme, isScrollMode, isCalcMode } = selectors.viewer.config(state)
  // const { percentage, pageNo } = selectors.viewer.progress(bookId)(state)
  // const { show: showPageInfo } = selectors.viewer.progressComponent(state)

  const config = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(state)
  const bookId = selectors.viewer.id(state)
  const bookContent = selectors.entity('bookContents', bookId)(state)

  return {
    config,
    computed,
    bookContent,
    bookId
    // showPageInfo,
    // percentage,
    // pageNo,
    // theme,
    // isScrollMode,
    // isCalcMode
  }
}

@CSSModules(styles)
class BookContainer extends Component<OwnProps & StateProps, {}> {

  handleScrollLazily: any

  constructor(props) {
    super(props)
    // this.handleScroll = this.handleScroll.bind(this)
    // this.handleScrollLazily = _.debounce(this.handleScroll, 200, {
    //   maxWait: 1000
    // })
    this.handleRawMount = this.handleRawMount.bind(this)
  }

  // handleScroll() {
  //   const { allPages, pageHeight, isScrollMode } = this.props
  //   const pageCount = allPages.length
  //   const totalHeight = pageCount * pageHeight
  //   const scrollTop = document.body.scrollTop

  //   if (isScrollMode) {
  //     this.props.actions.updateBookProgress(scrollTop / totalHeight)
  //   }
  // }

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

  handleRawMount(wrap) {
    this.props.actions.calcBook(this.props.bookId, wrap)
  }

  render() {
    // const { allPages, pageHeight, showPageInfo, pageLimit, pageNo,
    //   theme, isScrollMode, isCalcMode, bookFlesh } = this.props
    const { config: { theme, isCalcMode, isScrollMode, pageHeight }, computed, bookContent } = this.props
    const { flesh: bookFlesh } = bookContent

    const pageNo = 1
    const pageLimit = 5
    let startPageIndex
    startPageIndex = pageNo - Math.ceil(pageLimit / 2)
    startPageIndex = startPageIndex < 0 ? 0 : startPageIndex

    const endPageIndex = startPageIndex + pageLimit

    const divHeight = isCalcMode
      ? 'auto'
      : (
        isScrollMode
          ? computed.length * pageHeight
          : pageHeight
      )

    return (
      <div styleName={theme.toLowerCase()} style={{ height: divHeight }}>
        {
          isCalcMode
            ? (
              <BookRaw
                bookFlesh={bookFlesh}
                onRawDataMount={this.handleRawMount}
              />
            )
            : (
              <BookPages
                pages={_.slice(computed, startPageIndex, endPageIndex) as TBookPage[]}
              />
            )
        }
      </div>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(BookContainer)
