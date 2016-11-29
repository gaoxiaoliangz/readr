import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BookContainer from './components/BookContainer'
import _ from 'lodash'
import ViewerPanel from './components/ViewerPanel'
import BookChapters from './components/BookChapters'
import ViewerNav from './components/ViewerNav'
import CSSModules from 'react-css-modules'
import utils from '../../utils'
import * as viewerUtils from './Viewer.utils'
import DocContainer from '../../containers/DocContainer'
import * as selectors from '../../store/selectors'
import Loading from '../../elements/Loading'
import $ from 'jquery'
import helpers from '../../helpers'
import {
  loadBook,
  loadBookProgress,
  openConfirmModal,
  initializeBookProgress,
  destroyBookProgress,
  loadBookContent,
  updateBookProgress,
  sendNotification,
  initializeViewer,
  calcBook,
  initializeViewerSuccess
} from '../../store/actions'
import { ROLES } from '../../constants'
const styles = require('./Viewer.scss')

interface AllProps {
  loadBook: loadBook
  loadBookContent: loadBookContent
  book: any
  bookContent: {
    nav: any
    flesh: TBookFlesh
  }
  loadBookProgress: loadBookProgress
  updateBookProgress: updateBookProgress
  progress: number
  openConfirmModal: (data: openConfirmModal) => void
  session: any
  isFetchingProgress: boolean
  initializeBookProgress: any
  destroyBookProgress: any
  sendNotification: sendNotification
  initializeViewer: initializeViewer
  calcBook: calcBook
  computedPages?: TBookPage[]
  basicInfo: {
    isCalcMode?: boolean
    fluid?: boolean
    isTouchMode?: boolean
  }
  initializeViewerSuccess: initializeViewerSuccess
}

interface State {
  showPanel?: boolean
  showPageInfo?: boolean
  showViewerPreference?: boolean
}

@CSSModules(styles)
class Viewer extends Component<AllProps, State> {

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      showViewerPreference: false,
    }
    this.handleViewerClick = this.handleViewerClick.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleProgressChange = this.handleProgressChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.resizeLazily = _.debounce(this.handleResize, 500, {
      maxWait: 1000
    })
    this.handleChapterUpdate = this.handleChapterUpdate.bind(this)
  }

  bookId: string
  resizeLazily: any

  handelViewerMouseMove(event) {
    const { basicInfo: { isCalcMode, isTouchMode } } = this.props

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
    this.props.initializeViewer(this.bookId)
  }

  handleProgressChange(newProgress) {
    this.props.updateBookProgress(this.bookId, newProgress)
  }

  handleViewerClick() {
    const { basicInfo: { isTouchMode } } = this.props

    if (isTouchMode) {
      this.setState({
        showPanel: !this.state.showPanel,
        showPageInfo: !this.state.showPageInfo
      })
    }
  }

  handleChapterUpdate(ele: HTMLElement) {
    this.props.calcBook(this.bookId, ele)
  }

  addEventListeners() {
    window.addEventListener('resize', this.resizeLazily)

    const context = this

    $('body').on('click', 'a.js-book-nav', function (e) {
      e.preventDefault()
      const href = $(this).attr('href')
      try {
        const pageNo = viewerUtils.resolveBookLocation(href, context.props.computedPages)
        context.props.updateBookProgress(context.bookId, pageNo / context.props.computedPages.length)
      } catch (error) {
        context.props.sendNotification(error.message, 'error')
      }
    })
  }

  removeEventListeners() {
    window.removeEventListener('resize', this.resizeLazily)
    // TODO: 移除 jquery 事件委托
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const sessionDetermined = this.props.session.determined === false && nextProps.session.determined === true

    // TODO: rxjs or react prop listener?
    if (sessionDetermined && nextProps.session.user.role !== ROLES.VISITOR) {
      this.props.loadBookProgress(this.bookId)
    }

    if (sessionDetermined && nextProps.session.user.role === ROLES.VISITOR) {
      this.props.initializeBookProgress()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const viewChanged = this.props.basicInfo.fluid !== prevProps.basicInfo.fluid

    if (viewChanged) {
      this.props.initializeViewer(this.bookId, {
        isCalcMode: true
      })
      this.setState({
        showPageInfo: false,
        showPanel: false
      })
    }
  }

  componentDidMount() {
    this.props.initializeViewer(this.bookId)
    this.props.loadBook(this.bookId)
    this.props.loadBookContent(this.bookId)
    this.addEventListeners()

    // 是否登录的判断逻辑放到 saga 里面了
    this.props.loadBookProgress(this.bookId)
  }

  componentWillUnmount() {
    this.removeEventListeners()
    // TODO
    this.props.destroyBookProgress()
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
    const { progress, bookContent, computedPages, basicInfo: { fluid, isCalcMode } } = this.props

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
          pageHeight={900}
          fluid={fluid}
          initialProgress={progress}
          onProgressChange={this.handleProgressChange}
          showPageInfo={showPageInfo}
          pageLimit={5}
          />
      )
    } else {
      return <Loading text="准备中" center />
    }
  }

  render() {
    const { bookContent } = this.props

    return (
      <DocContainer bodyClass="viewer" title={this.props.book.title}>
        <div onClick={this.handleViewerClick} onMouseMove={this.handelViewerMouseMove} >
          <ViewerNav
            nav={bookContent.nav || []}
            />
          {this.renderViewPanel()}
          {this.renderBook()}
        </div>
      </DocContainer>
    )
  }
}

const mapStateToProps = (state, ownProps: any) => {
  const bookId = ownProps.params.id
  const book = selectors.common.entity('books', bookId)(state)
  const bookContent = selectors.common.entity('bookContents', bookId)(state)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const basicInfo = selectors.viewer.basicInfo(state)

  return {
    book,
    bookContent,
    progress: state.components.viewer.bookProgress.percentage,
    isFetchingProgress: state.components.viewer.bookProgress.isFetching,
    session: state.session,
    computedPages,
    basicInfo
  }
}

export default connect<{}, {}, AllProps>(
  mapStateToProps,
  {
    loadBook,
    loadBookProgress,
    openConfirmModal,
    initializeBookProgress,
    destroyBookProgress,
    loadBookContent,
    updateBookProgress,
    sendNotification,
    initializeViewer,
    calcBook,
    initializeViewerSuccess
  }
)(Viewer)
