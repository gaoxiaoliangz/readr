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

const JS_NAV_HOOK = 'a.js-book-nav'
const $body = $('body')
const PAGE_LIMIT = 5

interface Props {
  bookId: string
  onProgressChange: (percentage: number) => void
  onSessionDetermined?: (userRole: string) => void
  onReinitializeRequest?: (newConfig, oldConfig) => void
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
}

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.bookId
  const book = selectors.common.entity('books', bookId)(state)
  const bookContent = selectors.common.entity('bookContents', bookId)(state)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const config = selectors.viewer.config(state)
  const { isFetching } = selectors.viewer.progress(bookId)(state)

  return {
    book,
    bookContent,
    isFetchingProgress: isFetching,
    session: state.session,
    computedPages,
    config
  }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
export default class SomeComponent extends Component<AllProps, State> {

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
    this.handleChapterUpdate = this.handleChapterUpdate.bind(this)
  }

  handleChapterUpdate(ele: HTMLElement) {
    this.props.actions.calcBook(this.props.bookId, ele)
  }

  handleNavLinkClick(e) {
    e.preventDefault()
    const { computedPages, } = this.props
    const href = $(e.target).attr('href')

    try {
      const pageNo = viewerUtils.resolveBookLocation(href, computedPages)
      this.props.actions.updateBookProgress((pageNo - 1) / computedPages.length)
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
    const { onSessionDetermined, session } = this.props
    const sessionDetermined = session.determined === false
      && nextProps.session.determined === true

    if (sessionDetermined && onSessionDetermined) {
      onSessionDetermined(nextProps.session.user.role)
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
    const { onSessionDetermined, session } = this.props

    if (session.determined === true && onSessionDetermined) {
      onSessionDetermined(session.user.role)
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
            onUpdate={this.handleChapterUpdate}
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
