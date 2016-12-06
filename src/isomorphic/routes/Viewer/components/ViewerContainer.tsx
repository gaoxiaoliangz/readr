import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../store/selectors'
import * as viewerUtils from '../Viewer.utils'
import BookContainer from './BookContainer'
import ViewerPanel from './ViewerPanel'
import BookChapters from './BookChapters'
import _ from 'lodash'
import Loading from '../../../elements/Loading'
import $ from 'jquery'
import { JUMP_REQUEST_TYPES } from '../Viewer.constants'
import utils from '../../../utils'

const JS_NAV_HOOK = 'a.js-book-nav'
const $body = $('body')
const PAGE_LIMIT = 5

interface Props {
  bookId: string
  onProgressChange: (percentage: number) => void
  onReinitializeRequest?: (newConfig, oldConfig) => void
  onJumpRequest?: (newLoc, oldLoc, jumpRequestType) => void
}

interface LocalState {
  showPageInfo?: boolean
}

interface AllProps extends Props {
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
  const bookId = ownProps.bookId
  const book = selectors.common.entity('books', bookId)(state)
  const bookContent = selectors.common.entity('bookContents', bookId)(state)
  const bookProgress = selectors.common.entity('bookProgress', bookId)(state)
  const cloudProgress = _.get(bookProgress, 'percentage', 0)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const config = selectors.viewer.config(state)
  const { isFetching } = selectors.viewer.progress(bookId)(state)
  const { percentage: viewerPercentage } = selectors.viewer.progress(bookId)(state)
  const { show: showPanel } = selectors.viewer.panel(state)

  return {
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

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
export default class ViewerContainer extends Component<AllProps, LocalState> {

  resizeLazily: typeof _.debounce

  constructor(props) {
    super(props)
    this.state = {
      showPageInfo: false
    }
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
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

  handleNavLinkClick(e) {
    e.preventDefault()
    const { computedPages, onJumpRequest, viewerPercentage } = this.props
    const href = $(e.target).attr('href')

    try {
      const pageNo = viewerUtils.resolveBookLocation(href, computedPages)
      const percentage = (pageNo - 1) / computedPages.length
      if (onJumpRequest) {
        onJumpRequest(percentage, viewerPercentage, JUMP_REQUEST_TYPES.NAV)
      }
    } catch (error) {
      this.props.actions.sendNotification(error.message, 'error')
    }
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


  addEventListeners() {
    window.addEventListener('resize', this.resizeLazily)
    $body.on('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  removeEventListeners() {
    window.removeEventListener('resize', this.resizeLazily)
    $body.off('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { viewerPercentage, onJumpRequest } = this.props
    const viewerPercentageChanged = viewerPercentage !== nextProps.viewerPercentage

    if (viewerPercentageChanged && onJumpRequest) {
      onJumpRequest(nextProps.viewerPercentage, viewerPercentage, JUMP_REQUEST_TYPES.LOC_CHANGE)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { onReinitializeRequest } = this.props
    const viewChanged = !_.isEqualWith(this.props.config, prevProps.config, (valA, valB, key) => {
      if (key === 'isTouchMode' || key === 'isCalcMode') {
        return true
      }
    })

    if (viewChanged) {
      if (onReinitializeRequest) {
        onReinitializeRequest(this.props.config, prevProps.config)
      }
      this.setState({
        showPageInfo: false,
      })
      this.props.actions.toggleViewerPanel(false)
    }
  }

  componentDidMount() {
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  renderBook() {
    const { showPageInfo } = this.state
    const { bookContent, computedPages,
      config: { fluid, isCalcMode, pageHeight },
      onProgressChange } = this.props

    if (!bookContent.flesh) {
      return <Loading text="书籍获取中" center />
    }

    // return <BookChapters
    //   bookFlesh={bookContent.flesh}
    //   onRawDataMount={this.handleRawDataMount}
    //   fluid={fluid}
    //   />

    if (isCalcMode) {
      return (
        <div>
          <Loading text="书籍排版中" center />
          <BookChapters
            bookFlesh={bookContent.flesh}
            onRawDataMount={this.handleRawDataMount}
            fluid={fluid}
            />
        </div>
      )
    } else if (computedPages.length !== 0) {
      return (
        <BookContainer
          allPages={computedPages}
          pageHeight={pageHeight}
          fluid={fluid}
          onProgressChange={val => onProgressChange(val)}
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
