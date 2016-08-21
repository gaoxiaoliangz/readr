import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BookPageList from './BookPageList'
import * as viewerUtils from './Viewer.utils2'
// import { getBookView } from '../../utils/view'
import { fetchBook, fetchProgress, openDialog } from '../../store/actions'
import _ from 'lodash'
// import Fade from '../../elements/_animations/Fade'
import ViewerScrollbar from './ViewerScrollbar'
import ViewerPanel from './ViewerPanel'
import BookPageWithRawHtml from './BookPageWithRawHtml'
import CSSModules from 'react-css-modules'
import api from '../../apis'
import utils from '../../utils'
const styles: any = require('./_viewer.scss')

interface IAllProps {
  fetchBook: any
  book: any
  rawBookContent: string
  fetchProgress: (bookId: string) => void
  progress: number
  openDialog: (data: openDialog) => void
}

interface IState {
  showPanel?: boolean
  isCalcMode?: boolean
  nodeHeights?: number[]
  nodes?: string[]

  // view: {}
  showViewerPreference?: boolean
}

@CSSModules(styles)
class Viewer extends Component<IAllProps, IState> {

  bookId: string
  bookPageWithRawHtml: any

  // mapViewToState: () => void
  // deboundedSetProgress: () => void

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      isCalcMode: true,
      nodeHeights: [],
      nodes: [],
      // view: getBookView(),
      showViewerPreference: false
    }
    this.handleProgressChange = this.handleProgressChange.bind(this)
  }

  // addEventListeners() {


  //   // TODO: use session to determine latest progress
  //   this.deboundedSetProgress = _.debounce(this.checkAndSetProgress, 200)

  //   // window.addEventListener('scroll', this.deboundedSetProgress)
  //   window.addEventListener('scroll', this.mapScrollTopToState)
  //   window.addEventListener('resize', this.mapWindowWidthToState)
  //   window.addEventListener('resize', this.mapViewToState)
  // }

  // removeEventListeners() {
  //   window.removeEventListener('scroll', this.deboundedSetProgress)
  //   window.removeEventListener('scroll', this.mapScrollTopToState)
  //   window.removeEventListener('resize', this.mapWindowWidthToState)
  //   window.removeEventListener('resize', this.mapViewToState)
  // }

  handelViewerOnMouseMove(event) {
    // if (this.state.calculatedPages.props.view.screen === 'hd') {
    if (!this.state.isCalcMode) {
      let y = event.pageY - document.body.scrollTop

      if (y < 90) {
        this.setState({
          showPanel: true
        })
      } else {
        this.setState({
          showPanel: false
        })
      }
    }
  }

  // clickToToggleBookPanel() {
  //   if (this.state.calculatedPages.props.view.screen === 'phone') {
  //     this.setState({
  //       showPanel: !this.state.showPanel
  //     })
  //   }
  // }

  loadRawBookContent() {
    this.props.fetchBook(this.bookId).then(res => {
      const nodes = viewerUtils.markdownToNodeStringList(this.props.rawBookContent)

      this.setState({
        nodes
      })
    })
  }

  setProgress(percentage) {
    api.setProgress(this.bookId, { percentage })
  }

  handleProgressChange(newProgress) {
    this.setProgress(newProgress)
  }

  calcDom() {
    const contentHtml = this.bookPageWithRawHtml.getContentHtml()
    console.log(contentHtml)

    // console.log(this.bookPageWithRawHtml.bookPageList)
    // const nodeHeights = viewerUtils.getNodeHeights(contentHtml.childNodes)
    // console.log('calc done')
    // this.setState({
    //   nodeHeights,
    //   // isCalcMode: false
    // })

    // let view = getBookView()
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if (!simpleCompareObjects(this.state.view, nextState.view)) {
  //     this.setState({
  //       isCalculatingDom: true,
  //     })
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const hasBookNodesLoaded = this.state.nodes.length !== 0 && prevState.nodes.length === 0

    if (this.state.isCalcMode && hasBookNodesLoaded) {
      this.calcDom()
    }
  }

  componentDidMount() {
    this.loadRawBookContent()
    this.props.fetchProgress(this.bookId)
    console.log(utils.getScreenInfo())
    // this.props.openDialog({
    //   title: 'test',
    //   content: 'fuck you',
    //   onConfirm: () => {
    //     console.log('hahaha')
    //   }
    // })
    //   this.addEventListeners()
    setTimeout(() => {
      console.log(this.bookPageWithRawHtml.bookPageList.bookPage.bookPageDom)
    }, 2000)
  }

  // componentWillUnmount() {
  //   this.removeEventListeners()
  // }

  renderViewPanel() {
    // return ((this.state.showPanel && this.state.isReadingMode) || this.state.showViewerPreference) && (
    return (this.state.showPanel || this.state.showViewerPreference) && (
      <ViewerPanel
        title={this.props.book.title}
        showViewerPreference={this.state.showViewerPreference}
        onPrefVisibilityChange={newVisibility => {
          this.setState({
            showViewerPreference: newVisibility
          })
        }}
        />
    )
  }

  renderBook() {
    const { nodes, nodeHeights } = this.state
    const { progress } = this.props

    if (nodes.length === 0) {
      return <div>Loading ...</div>
    }

    return this.state.isCalcMode
      ? (
        <BookPageWithRawHtml
          nodes={nodes}
          ref={ref => { this.bookPageWithRawHtml = ref } }
          fluid
          />
      )
      : (
        <BookPageList
          nodeHeights={nodeHeights}
          nodes={this.state.nodes}
          pageCount={5}
          initialProgress={progress}
          pageHeight={900}
          onProgressChange={this.handleProgressChange}
          fluid
          />
      )
  }

  render() {
    return (
      <div styleName={`viewer--hd`} onMouseMove={this.handelViewerOnMouseMove.bind(this) } >
        { this.renderViewPanel() }
        { this.renderBook() }
        <ViewerScrollbar current={20} total={309} />
      </div>
    )
  }
}

export default connect(
  (state, ownProps: any) => {
    const book = state.entities.books[ownProps.params.id] || {}

    return {
      book,
      rawBookContent: _.get(book, 'content.raw', ''),
      progress: _.get(state.payloads, 'progress.percentage', 0),
      session: state.session
    }
  },
  { fetchBook, fetchProgress, openDialog }
)(Viewer as any)
