import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// import Icon from '../../elements/Icon'
import BookPageList from './BookPageList'
// import * as renderBook from './Viewer.utils'
import * as viewerUtils from './Viewer.utils2'
import { getBookView } from '../../utils/view'
// import { getCache, setCache } from '../../utils/cache'
// import { simpleCompareObjects } from '../../utils/object'
import { fetchBook, fetchProgress } from '../../store/actions'
import apis from '../../apis'
// import Body from '../../components/Body'
import _ from 'lodash'
// import Fade from '../../elements/_animations/Fade'
import ViewerScrollbar from './ViewerScrollbar'
import ViewerPanel from './ViewerPanel'
import BookPageWithRawHtml from './BookPageWithRawHtml'
import CSSModules from 'react-css-modules'

const styles: any = require('./_viewer.scss')

interface IAllProps {
  fetchBook: any
  book: any
  rawBookContent: string
  fetchProgress: (bookId: string) => void
}

interface IState {
  showPanel?: boolean
  isCalcMode?: boolean
  nodeHeights?: number[]
  nodes?: string[]


  // isInitialProgressSet: boolean
  // currentPage: number
  // latestProgress: number
  // view: {}
  // showViewerPreference: boolean
}

@CSSModules(styles)
class Viewer extends Component<IAllProps, IState> {

  bookId: string
  bookHtml: any

  // mapViewToState: () => void
  // checkAndSetProgress: () => void
  // deboundedSetProgress: () => void

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      isCalcMode: true,
      nodeHeights: [],
      nodes: []


      // isInitialProgressSet: false,

      // currentPage: 0, // TODO: remove?

      // latestProgress: 0,
      // view: getBookView(),
      // showViewerPreference: false
    }
  }

  // scrollTo(position) {
  //   let pageCount = this.state.calculatedPages.props.children.length
  //   let pageHeight = this.state.calculatedPages.props.view.pageHeight
  //   let height = pageCount * pageHeight

  //   if (position < 1) {
  //     this.setState({
  //       currentPage: renderBook.percentageToPage(position, pageCount) as any,
  //       scrollTop: position * height
  //     })
  //     document.body.scrollTop = pageCount * pageHeight * position
  //   } else {
  //     this.setState({
  //       currentPage: position,
  //       scrollTop: height * position / pageCount
  //     })
  //     document.body.scrollTop = pageHeight * position
  //   }
  // }

  // addEventListeners() {
  //   this.mapScrollTopToState = () => {
  //     this.setState({
  //       scrollTop: document.body.scrollTop
  //     })
  //   }

  //   this.mapWindowWidthToState = () => {
  //     this.setState({
  //       windowWidth: window.innerWidth
  //     })
  //   }

  //   this.mapViewToState = () => {
  //     this.setState({
  //       view: getBookView()
  //     })
  //   }

  //   this.checkAndSetProgress = () => {
  //     let currentPageNo = this.props.book.pageNo
  //     this.props.actions.fetchBookProgress(this.bookId).then(action => {
  //       if (this.props.book.pageNo - currentPageNo > 5) {
  //         this.setState({
  //           showProgressDialog: true,
  //           latestProgress: this.props.book.percentage
  //         })
  //       } else {
  //         let pageSum = this.state.calculatedPages.props.children.length
  //         let height = pageSum * this.state.view.pageHeight
  //         let percentage = this.state.scrollTop / height
  //         let pageNo = renderBook.percentageToPage(percentage, pageSum)

  //         let progress = {
  //           pageNo,
  //           pageSum,
  //           percentage
  //         }

  //         apis.setProgress(this.bookId, progress)
  //       }
  //     })
  //   }

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

  // loadCalculatedPages() {
  //   const bookId = this.props.params.id
  //   let pages = getCache(`book${bookId}_pages`)

  //   // check if pages are cached
  //   if (pages) {
  //     pages = JSON.parse(pages)

  //     this.setState({
  //       isReadingMode: true,
  //       calculatedPages: pages,
  //       bookHtml: renderBook.pagesToHtml(pages)
  //     })
  //   } else {
  //     this.props.actions.fetchBook(bookId, ['content'])
  //   }
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps.book && nextProps.book.content && nextProps.book.content.html && !this.props.book.content) {
  //     this.setState({
  //       isCalculatingDom: true,
  //       bookHtml: nextProps.book.content.html
  //     })
  //   }

  //   if (!simpleCompareObjects(this.state.view, nextState.view)) {
  //     this.setState({
  //       isCalculatingDom: true,
  //     })
  //   }
  // }

  // componentDidMount() {
  //   const bookId = this.props.params.id

  //   // actions.userAuth()
  //   this.props.fetchBook(bookId)
  //   // actions.fetchBookProgress(bookId)

  //   this.addEventListeners()
  //   this.loadCalculatedPages()
  // }

  // componentWillUnmount() {
  //   this.removeEventListeners()
  //   this.setState({
  //     isInitialProgressSet: false
  //   })
  // }

  // renderBook() {
  //   let scrollTop = this.state.scrollTop
  //   let calculatedPages = this.state.calculatedPages
  //   let bookId = this.props.params.id
  //   let view = calculatedPages.props.view
  //   let height = calculatedPages.props.children.length * view.pageHeight
  //   let currentPage = renderBook.percentageToPage(scrollTop / height, calculatedPages.props.children.length)

  //   let pages = renderBook.filterPages({
  //     startPage: currentPage,
  //     offset: 2,
  //     quantity: 5,
  //     pages: calculatedPages.props.children
  //   })

  //   return (
  //     <div onClick={this.clickToToggleBookPanel.bind(this) }>
  //       <BookPageList height={height} view={view} bookId={bookId} pages={pages} />
  //     </div>
  //   )
  // }


  loadRawBookContent() {
    this.props.fetchBook(this.bookId).then(res => {
      const nodes = viewerUtils.markdownToNodeStringList(this.props.rawBookContent)

      this.setState({
        nodes
      })
    })
  }

  calcDom() {
    const contentHtml = this.bookHtml.getNodes()
    const nodeHeights = viewerUtils.getNodeHeights(contentHtml.childNodes)

    this.setState({
      nodeHeights,
      isCalcMode: false
    })

    // let view = getBookView()

  }

  componentDidUpdate(prevProps, prevState) {
    const hasBookNodesLoaded = this.state.nodes.length !== 0 && prevState.nodes.length === 0

    if (this.state.isCalcMode && hasBookNodesLoaded) {
      this.calcDom()
    }

    // scroll to previous reading progress when opening a book
    //   if (this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
    //     setTimeout(() => {
    //       this.scrollTo(this.props.book.percentage)
    //       this.setState({
    //         isInitialProgressSet: true
    //       })
    //     }, 1)
    //   }
  }

  componentDidMount() {
    this.loadRawBookContent()
    this.props.fetchProgress(this.bookId)
  }

  renderViewPanel() {
    // return ((this.state.showPanel && this.state.isReadingMode) || this.state.showViewerPreference) && (
    return this.state.showPanel && (
      <ViewerPanel
        title="book1"
        />
    )
  }

  renderBook() {
    const { nodes, nodeHeights } = this.state

    return this.state.isCalcMode
      ? (
        <BookPageWithRawHtml
          bookHtml={nodes.join('') }
          ref={ref => { this.bookHtml = ref } }
          />
      )
      : (
        <BookPageList
          nodeHeights={nodeHeights}
          nodes={this.state.nodes}
          pageCount={5}
          initialPage={20}
          pageHeight={900}
          />
      )
  }

  render() {
    // let book = this.props.book
    // let view = this.state.view
    // let actions = [
    //   {
    //     text: 'Yes',
    //     function: () => {
    //       this.scrollTo.call(this, this.state.latestProgress)
    //       this.hideProgressDialog.call(this)
    //     }
    //   },
    //   {
    //     text: 'No',
    //     function: this.hideProgressDialog.bind(this)
    //   }
    // ]

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
      session: state.session
    }
  },
  { fetchBook, fetchProgress }
)(Viewer as any)
