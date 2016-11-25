import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BookContainer from './components/BookContainer'
import * as viewerUtils from './Viewer.utils'
import _ from 'lodash'
import ViewerPanel from './components/ViewerPanel'
import BookChapters from './components/BookChapters'
import ViewerNav from './components/ViewerNav'
import CSSModules from 'react-css-modules'
import api from '../../services/api'
import utils from '../../utils'
import DocContainer from '../../containers/DocContainer'
import * as selectors from '../../store/selectors'
import Loading from '../../elements/Loading'
import $ from 'jquery'
import helpers from '../../helpers'
import {
  loadBook,
  fetchProgress,
  openConfirmModal,
  initializeBookProgress,
  destroyBookProgress,
  loadBookContent,
  updateBookProgress,
  sendNotification,
  initializeViewer
} from '../../store/actions'
const styles = require('./Viewer.scss')

interface AllProps {
  loadBook: loadBook
  loadBookContent: loadBookContent
  book: any
  bookContent: {
    nav: any
    flesh: TBookFlesh
  }
  fetchProgress: (bookId: string) => void
  updateBookProgress: updateBookProgress
  progress: number
  openConfirmModal: (data: openConfirmModal) => void
  session: any
  isFetchingProgress: boolean
  initializeBookProgress: any
  destroyBookProgress: any
  sendNotification: sendNotification
  initializeViewer: initializeViewer
}

interface State {
  showPanel?: boolean
  isCalcMode?: boolean
  showViewerPreference?: boolean
  fluid?: boolean
  isTouchMode?: boolean
  showPageInfo?: boolean
  computedPages?: any[]
}

@CSSModules(styles)
class Viewer extends Component<AllProps, State> {

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      isCalcMode: true,
      showViewerPreference: false,
      fluid: false,
      isTouchMode: false,
      computedPages: []
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

  isViewFluid(): boolean {
    return utils.getScreenInfo().view.width < 700
  }

  isTouchMode(): boolean {
    return utils.getScreenInfo().view.width < 700
  }

  setProgress(percentage) {
    api.setProgress(this.bookId, { percentage })
  }

  handelViewerMouseMove(event) {
    if (!this.state.isCalcMode && !this.state.isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      let dToScreenRight = utils.getScreenInfo().view.width - event.pageX

      this.setState({
        showPanel: y < 90,
        showPageInfo: dToScreenRight < 100
      })
    }
  }

  handleResize() {
    this.setState({
      fluid: this.isViewFluid(),
      isTouchMode: this.isTouchMode()
    })
  }

  handleProgressChange(newProgress) {
    const { isFetchingProgress, session: { user: { role } } } = this.props
    const progressDetermined = typeof isFetchingProgress !== 'undefined' || this.props.isFetchingProgress !== false

    if (progressDetermined && role !== 'visitor') {
      // this.setProgress(newProgress)
    }
  }

  handleViewerClick() {
    if (this.state.isTouchMode) {
      this.setState({
        showPanel: !this.state.showPanel,
        showPageInfo: !this.state.showPageInfo
      })
    }
  }

  calcDom(wrap: HTMLElement) {
    const { bookContent } = this.props
    const startCalcHtmlTime = new Date().valueOf()
    const computedChapters = Array.prototype
      .map.call(wrap.childNodes, child => {
        const childDiv = child as HTMLDivElement
        const id = childDiv.getAttribute('id')
        const nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes)

        return {
          id,
          nodeHeights
        }
      })
    const endCalcHtmlTime = new Date().valueOf()
    helpers.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)

    const computedPages = viewerUtils.groupPageFromChapters(bookContent.flesh, computedChapters, 900)

    this.setState({
      computedPages,
      isCalcMode: false,
      fluid: this.isViewFluid(),
      isTouchMode: this.isTouchMode()
    })
  }

  handleChapterUpdate(ele: HTMLElement) {
    this.calcDom(ele)
  }

  resolveBookLocation(href) {
    const { computedPages } = this.state
    const chapterId = href.split('$')[0]
    const hash = href.split('$')[1]

    let i = 0
    let foundChapterPage

    while (i < computedPages.length) {
      const page = computedPages[i]
      if (`#${page.meta.chapterId}` === chapterId) {
        foundChapterPage = page.meta.pageNo

        if (hash) {
          if (page.meta.hash && page.meta.hash.indexOf(hash) !== -1) {
            helpers.print('with hash', page.meta.pageNo)
            return page.meta.pageNo
          }
        } else {
          helpers.print('without hash', page.meta.pageNo)
          return page.meta.pageNo
        }
      }
      i++
    }

    if (!foundChapterPage) {
      this.props.sendNotification('未找到位置！', 'error')
      return false
    }

    this.props.sendNotification('所在章节未找到位置，已跳转至章节！', 'warning')
    helpers.print('foundChapterPage', foundChapterPage)
    return foundChapterPage
  }

  addEventListeners() {
    window.addEventListener('resize', this.resizeLazily)
  }

  removeEventListeners() {
    window.removeEventListener('resize', this.resizeLazily)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const sessionDetermined = this.props.session.determined === false && nextProps.session.determined === true

    if (sessionDetermined && nextProps.session.user.role !== 'visitor') {
      this.props.fetchProgress(this.bookId)
    }

    if (sessionDetermined && nextProps.session.user.role === 'visitor') {
      this.props.initializeBookProgress()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const viewChanged = this.state.fluid !== prevState.fluid

    if (viewChanged) {
      this.setState({
        isCalcMode: true
      })
    }
  }

  componentDidMount() {
    const { session, initializeViewer, loadBook, loadBookContent, fetchProgress, updateBookProgress } = this.props
    const context = this

    initializeViewer(this.bookId)
    loadBook(this.bookId)
    loadBookContent(this.bookId)
    this.addEventListeners()

    // 从其他页面直接进来的话 session 一开始就是确定的
    if (session.determined && session.user.role !== 'visitor') {
      fetchProgress(this.bookId)
    }

    $('body').on('click', 'a.js-book-nav', function (e) {
      e.preventDefault()
      const href = $(this).attr('href')
      const pageNo = context.resolveBookLocation(href)
      if (pageNo) {
        updateBookProgress(pageNo / context.state.computedPages.length)
      }
    })
  }

  componentWillUnmount() {
    this.removeEventListeners()
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
    const { fluid, showPageInfo, computedPages } = this.state
    const { progress, bookContent } = this.props

    if (!bookContent.flesh) {
      return <Loading text="书籍获取中" center />
    }

    if (this.state.isCalcMode) {
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

  return {
    book,
    bookContent,
    progress: state.components.viewer.bookProgress.percentage,
    isFetchingProgress: state.components.viewer.bookProgress.isFetching,
    session: state.session
  }
}

export default connect<{}, {}, AllProps>(
  mapStateToProps,
  {
    loadBook,
    fetchProgress,
    openConfirmModal,
    initializeBookProgress,
    destroyBookProgress,
    loadBookContent,
    updateBookProgress,
    sendNotification,
    initializeViewer
  }
)(Viewer)
