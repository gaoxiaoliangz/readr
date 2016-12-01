import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../store/selectors'
import * as viewerUtils from '../Viewer.utils'
import BookContainer from './BookContainer'
import ViewerPanel from './ViewerPanel'
import BookChapters from './BookChapters'
import ViewerNav from './ViewerNav'
import _ from 'lodash'
import utils from '../../../utils'
import Loading from '../../../elements/Loading'
import $ from 'jquery'
import { JUMP_REQUEST_TYPES } from '../Viewer.constants'

const JS_NAV_HOOK = 'a.js-book-nav'
const $body = $('body')
const PAGE_LIMIT = 5

interface Props {
  bookId: string
  onProgressChange: (percentage: number) => void
  onSessionDetermined?: (userRole: string) => void
  onReinitializeRequest?: (newConfig, oldConfig) => void
  onCloudProgressChange?: (newPercentage, oldPercentage) => void
  onJumpRequest?: (newLoc, oldLoc, jumpRequestType) => void
  onComputedMount?: () => void
}

interface State {
  showPanel?: boolean
  showPageInfo?: boolean
  showViewerPreference?: boolean
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

  return {
    book,
    bookContent,
    isFetchingProgress: isFetching,
    session: state.session,
    computedPages,
    config,
    cloudProgress,
    viewerPercentage
  }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
export default class ViewerContainer extends Component<AllProps, State> {

  resizeLazily: any

  constructor(props) {
    super(props)
    this.state = {
      showPanel: false,
      showViewerPreference: false,
    }
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
    this.resizeLazily = _.debounce(this.handleResize, 500, {
      maxWait: 1000
    })
    this.handleViewerClick = this.handleViewerClick.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.resizeLazily = this.resizeLazily.bind(this)
    this.handleRawDataMount = this.handleRawDataMount.bind(this)
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
      this.setState({
        showPanel: !this.state.showPanel,
        showPageInfo: !this.state.showPageInfo
      })
    }
  }

  handelViewerMouseMove(event) {
    const { config: { isCalcMode, isTouchMode } } = this.props

    if (!isCalcMode && !isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      let dToScreenRight = utils.getScreenInfo().view.width - event.pageX

      this.setState({
        showPanel: y < 90,
        showPageInfo: dToScreenRight < 100
      })
    }
  }

  handleResize() {
    this.props.actions.initializeViewer(this.props.bookId, {
      isCalcMode: false
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
    const { onSessionDetermined, session, cloudProgress, onCloudProgressChange,
      viewerPercentage, onJumpRequest, onComputedMount, computedPages } = this.props

    const sessionDetermined = session.determined === false
      && nextProps.session.determined === true

    const cloudProgressChanged = cloudProgress !== nextProps.cloudProgress

    const viewerPercentageChanged = viewerPercentage !== nextProps.viewerPercentage

    const computed = _.isEmpty(computedPages) && !_.isEmpty(nextProps.computedPages)

    if (sessionDetermined && onSessionDetermined) {
      onSessionDetermined(nextProps.session.user.role)
    }

    console.log('nextProps.cloudProgress', nextProps.cloudProgress)
    if (cloudProgressChanged && onCloudProgressChange) {
      onCloudProgressChange(nextProps.cloudProgress, cloudProgress)
      if (viewerPercentageChanged) {
        console.warn('viewerPercentageChanged within cloudProgressChanged, used old viewerPercentage!')
      }
      console.log('cloud change')
      onJumpRequest(nextProps.cloudProgress, viewerPercentage, JUMP_REQUEST_TYPES.CLOUD)
    }

    if (viewerPercentageChanged && onJumpRequest) {
      onJumpRequest(nextProps.viewerPercentage, viewerPercentage, JUMP_REQUEST_TYPES.LOC_CHANGE)
    }

    if (computed && onComputedMount) {
      onComputedMount()
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
        showPanel: false
      })
    }
  }

  componentDidMount() {
    const { onSessionDetermined, session, computedPages, onComputedMount } = this.props

    if (session.determined === true && onSessionDetermined) {
      onSessionDetermined(session.user.role)
    }

    if (!_.isEmpty(computedPages) && onComputedMount) {
      onComputedMount()
    }

    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  renderViewPanel() {
    return (this.state.showPanel || this.state.showViewerPreference) && (
      <ViewerPanel
        title={this.props.book.title}
        showViewerPreference={this.state.showViewerPreference}
        onPrefVisibilityChange={newVisibility => {
          this.setState({
            showViewerPreference: newVisibility
          })
        } }
        />
    )
  }

  renderBook() {
    const { showPageInfo } = this.state
    const { bookContent, computedPages, config: { fluid, isCalcMode, pageHeight }, onProgressChange } = this.props

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
    const { bookContent } = this.props

    return (
      <div onClick={this.handleViewerClick} onMouseMove={this.handelViewerMouseMove} >
        <ViewerNav
          nav={bookContent.nav || []}
          />
        {this.renderViewPanel()}
        {this.renderBook()}
      </div>
    )
  }
}
