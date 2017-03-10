import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../selectors'
import BookContainer from './BookContainer'
import ViewerPanel from './ViewerPanel'
import BookChapters from './BookChapters'
import _ from 'lodash'
import Loading from '../../../components/Loading'
import utils from '../../../utils'

const PAGE_LIMIT = 5

interface Props {}

interface LocalState {
  showPageInfo?: boolean
}

interface OtherProps {
  bookId?: string
  book?: {
    title: string
  }
  bookContent?: {
    nav: any
    flesh: TBookFlesh
  }
  session?: {
    determined: boolean
    user: {
      role: string
    }
  }
  isFetchingProgress?: boolean
  computedPages?: TBookPage[]
  config?: ViewerConfig
  actions?: typeof actions
  cloudProgress?: number
  viewerPercentage?: number
  showPanel?: boolean
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = config.bookId
  const book = selectors.common.entity('books', bookId)(state)
  const bookContent = selectors.common.entity('bookContents', bookId)(state)
  const bookProgress = selectors.common.entity('bookProgress', bookId)(state)
  const cloudProgress = _.get(bookProgress, 'percentage', 0)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const { percentage: viewerPercentage, isFetching } = selectors.viewer.progress(bookId)(state)
  const { show: showPanel } = selectors.viewer.panel(state)

  return {
    bookId,
    book,
    bookContent,
    isFetchingProgress: isFetching,
    session: state.session,
    computedPages,
    config,
    cloudProgress,
    viewerPercentage,
    showPanel
  }
}

class ViewerContainer extends Component<Props & OtherProps, LocalState> {

  resizeLazily: typeof _.debounce

  constructor(props) {
    super(props)
    this.state = {
      showPageInfo: false
    }
    this.resizeLazily = _.debounce(this.handleResize, 500, {
      maxWait: 1000
    })
    this.handleViewerClick = this.handleViewerClick.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.resizeLazily = this.resizeLazily.bind(this)
    this.handleRawDataMount = this.handleRawDataMount.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
  }

  handleRawDataMount(ele: HTMLElement) {
    this.props.actions.calcBook(this.props.bookId, ele)
  }

  handleViewerClick() {
    const { config: { isTouchMode } } = this.props

    if (isTouchMode) {
      this.props.actions.toggleViewerPanel()
      this.setState({
        showPageInfo: !this.state.showPageInfo
      })
    }
  }

  handleResize() {
    this.props.actions.initializeViewerConfig(this.props.bookId, {
      isCalcMode: false
    })
  }

  handelViewerMouseMove(event) {
    let dToScreenRight = utils.getScreenInfo().view.width - event.pageX
    this.setState({
      showPageInfo: dToScreenRight < 100
    })
  }

  reinitializeViewer() {
    const { bookId } = this.props

    this.props.actions.configViewer(bookId, {
      isCalcMode: true
    })

    this.setState({
      showPageInfo: false,
    })
    this.props.actions.toggleViewerPanel(false)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidUpdate(prevProps, prevState) {
    const viewChanged = !_.isEqualWith(this.props.config, prevProps.config, (valA, valB, key) => {
      if (key === 'isTouchMode' || key === 'isCalcMode' || key === 'isScrollMode' || key === 'theme') {
        return true
      }
    })

    if (viewChanged) {
      this.reinitializeViewer()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeLazily)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeLazily)
  }

  renderBook() {
    const { showPageInfo } = this.state
    const { bookContent, computedPages,
      config: { isCalcMode, pageHeight }} = this.props

    if (!bookContent.flesh) {
      return <Loading text="书籍获取中" center />
    }

    if (isCalcMode) {
      return (
        <div>
          <Loading text="书籍排版中" center />
          <BookChapters
            bookFlesh={bookContent.flesh}
            onRawDataMount={this.handleRawDataMount}
            />
        </div>
      )
    } else if (computedPages.length !== 0) {
      return (
        <BookContainer
          allPages={computedPages}
          pageHeight={pageHeight}
          showPageInfo={showPageInfo}
          pageLimit={PAGE_LIMIT}
          />
      )
    } else {
      return <Loading text="准备中" center />
    }
  }

  render() {
    return (
      <div onClick={this.handleViewerClick} onMouseMove={this.handelViewerMouseMove} >
        <ViewerPanel />
        {this.renderBook()}
      </div>
    )
  }
}

export default connect<OtherProps, {}, Props>(
  mapStateToProps as any,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(ViewerContainer)
