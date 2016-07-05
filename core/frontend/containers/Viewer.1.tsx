import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Icon from 'elements/Icon'
import Loading from 'components/Loading'
import Dialog from 'elements/Dialog'
import BookPageList from 'components/BookPageList'
import * as renderBook from 'utils/renderBook'
// import callApi from 'utils/callApi'
import { getBookView } from 'utils/view'
import { getCache, setCache } from 'utils/cache'
import { simpleCompareObjects } from 'utils/object'
import { fetchBook, fetchBookProgress, userAuth } from 'actions/index'
import apis from 'utils/apis'
import Body from 'side-effects/Body'
import _ from 'lodash'
import ViewerPreference from '../components/ViewerPreference'
import Fade from '../elements/animations/Fade'
import ViewerScrollbar from '../components/ViewerScrollbar'

const actions = { fetchBook, fetchBookProgress, userAuth }

interface State {
  showPanel: boolean
  showProgressDialog: boolean
  isCalculatingDom: boolean
  isReadingMode: boolean
  isScrollMode: boolean
  isInitialProgressSet: boolean
  scrollTop: number
  currentPage: number
  calculatedPages: any
  latestProgress: number
  view: {}
  showViewerPreference: boolean
}

class Viewer extends Component<any, any> {

  bookId: number
  mapScrollTopToState: () => void
  mapWindowWidthToState: () => void
  mapViewToState: () => void
  checkAndSetProgress: () => void
  deboundedSetProgress: () => void
  refs: {
    [string: string]: any
    bookHtml: any
  }

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: true,
      showProgressDialog: false,

      isCalculatingDom: false,
      isReadingMode: false,
      isScrollMode: true,
      isInitialProgressSet: false,

      scrollTop: 0,
      currentPage: 0, // TODO: remove?
      calculatedPages: null,
      latestProgress: 0,
      view: getBookView(),
      showViewerPreference: false
    }

    this.toggleViewerPreference = this.toggleViewerPreference.bind(this)
  }

  toggleViewerPreference() {
    this.setState({
      showViewerPreference: !this.state.showViewerPreference
    })
  }

  scrollTo(position) {
    let pageCount = this.state.calculatedPages.props.children.length
    let pageHeight = this.state.calculatedPages.props.view.pageHeight
    let height = pageCount * pageHeight

    if (position < 1) {
      this.setState({
        currentPage: renderBook.percentageToPage(position, pageCount) as any,
        scrollTop: position * height
      })
      document.body.scrollTop = pageCount * pageHeight * position
    } else {
      this.setState({
        currentPage: position,
        scrollTop: height * position / pageCount
      })
      document.body.scrollTop = pageHeight * position
    }
  }

  addEventListeners() {
    this.mapScrollTopToState = () => {
      this.setState({
        scrollTop: document.body.scrollTop
      })
    }

    this.mapWindowWidthToState = () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    }

    this.mapViewToState = () => {
      this.setState({
        view: getBookView()
      })
    }

    this.checkAndSetProgress = () => {
      let currentPageNo = this.props.book.pageNo
      this.props.actions.fetchBookProgress(this.bookId).then(action => {
        if (this.props.book.pageNo - currentPageNo > 5) {
          this.setState({
            showProgressDialog: true,
            latestProgress: this.props.book.percentage
          })
        } else {
          let pageSum = this.state.calculatedPages.props.children.length
          let height = pageSum * this.state.view.pageHeight
          let percentage = this.state.scrollTop / height
          let pageNo = renderBook.percentageToPage(percentage, pageSum)

          let progress = {
            pageNo,
            pageSum,
            percentage
          }

          apis.setProgress(this.bookId, progress)
        }
      })
    }

    // TODO: use session to determine latest progress
    this.deboundedSetProgress = _.debounce(this.checkAndSetProgress, 200)

    window.addEventListener('scroll', this.deboundedSetProgress)
    window.addEventListener('scroll', this.mapScrollTopToState)
    window.addEventListener('resize', this.mapWindowWidthToState)
    window.addEventListener('resize', this.mapViewToState)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.deboundedSetProgress)
    window.removeEventListener('scroll', this.mapScrollTopToState)
    window.removeEventListener('resize', this.mapWindowWidthToState)
    window.removeEventListener('resize', this.mapViewToState)
  }

  toggleBookPanel(event) {
    if (this.state.calculatedPages.props.view.screen === 'hd') {
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

  clickToToggleBookPanel() {
    if (this.state.calculatedPages.props.view.screen === 'phone') {
      this.setState({
        showPanel: !this.state.showPanel
      })
    }
  }

  calculateDom() {
    let html = this.state.bookHtml
    let bookId = this.bookId
    let view = getBookView()
    let nodeHeights = renderBook.getNodeHeights(this.refs.bookHtml.childNodes)
    let pages = renderBook.htmlToPages(html, nodeHeights, view)

    setCache(`book${bookId}_pages`, JSON.stringify(pages))

    this.setState({
      isReadingMode: true,
      isCalculatingDom: false,
      calculatedPages: pages
    })
  }

  loadCalculatedPages() {
    const bookId = this.props.params.id
    let pages = getCache(`book${bookId}_pages`)

    // check if pages are cached
    if (pages) {
      pages = JSON.parse(pages)

      this.setState({
        isReadingMode: true,
        calculatedPages: pages,
        bookHtml: renderBook.pagesToHtml(pages)
      })
    } else {
      this.props.actions.fetchBook(bookId, ['content'])
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.book && nextProps.book.content && nextProps.book.content.html && !this.props.book.content) {
      this.setState({
        isCalculatingDom: true,
        bookHtml: nextProps.book.content.html
      })
    }

    if (!simpleCompareObjects(this.state.view, nextState.view)) {
      this.setState({
        isCalculatingDom: true,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
      this.calculateDom()
    }

    // scroll to previous reading progress when opening a book
    if (this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
      setTimeout(() => {
        this.scrollTo(this.props.book.percentage)
        this.setState({
          isInitialProgressSet: true
        })
      }, 1)
    }
  }

  componentDidMount() {
    const actions = this.props.actions
    const bookId = this.props.params.id

    actions.userAuth()
    actions.fetchBook(bookId)
    actions.fetchBookProgress(bookId)

    this.addEventListeners()
    this.loadCalculatedPages()
  }

  componentWillUnmount() {
    this.removeEventListeners()
    this.setState({
      isInitialProgressSet: false
    })
  }

  renderBook() {
    let scrollTop = this.state.scrollTop
    let calculatedPages = this.state.calculatedPages
    let bookId = this.props.params.id
    let view = calculatedPages.props.view
    let height = calculatedPages.props.children.length * view.pageHeight
    let currentPage = renderBook.percentageToPage(scrollTop / height, calculatedPages.props.children.length)

    let pages = renderBook.filterPages({
      startPage: currentPage,
      offset: 2,
      quantity: 5,
      pages: calculatedPages.props.children
    })

    return (
      <div onClick={this.clickToToggleBookPanel.bind(this) }>
        <BookPageList height={height} view={view} bookId={bookId} pages={pages} />
      </div>
    )
  }

  hideProgressDialog() {
    this.setState({
      showProgressDialog: false
    })
  }

  render() {
    let book = this.props.book
    let view = this.state.view
    let actions = [
      {
        text: 'Yes',
        function: () => {
          this.scrollTo.call(this, this.state.latestProgress)
          this.hideProgressDialog.call(this)
        }
      },
      {
        text: 'No',
        function: this.hideProgressDialog.bind(this)
      }
    ]

    return (
      <div className={`viewer viewer--${view.screen}`} onMouseMove={this.toggleBookPanel.bind(this) } >
        <Body className="viewer" />
        {
          !book.content && !this.state.calculatedPages ? (
            <Loading />
          ) : null
        }
        {
          this.state.showProgressDialog ? (
            <Dialog actions={actions} content="are you sure?"/>
          ) : null
        }
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          >
          {
            (this.state.showPanel && this.state.isReadingMode) || this.state.showViewerPreference ? (
              <div className="viewer-panel">
                <div className="container">
                  <div className="back">
                    <Link to="/">
                      <Icon name="back" />
                      <span>返回</span>
                    </Link>
                  </div>
                  <span className="title">{book.title}</span>
                  <div onClick={this.toggleViewerPreference} className="preference">
                    <Icon name="font" />
                  </div>
                  <div className="add">点击添加至书架</div>
                  <Fade>
                    {
                      this.state.showViewerPreference ? (
                        <ViewerPreference />
                      ) : null
                    }
                  </Fade>
                  {/*<span className="loc">{book.currentPage+"/"+pages.length}</span>*/}
                </div>
              </div>
            ) : null
          }
        </ReactCSSTransitionGroup>
        {
          (this.state.isCalculatingDom && this.state.bookHtml) ? (
            <ul className="pages">
              <li>
                <div ref="bookHtml" className="content" dangerouslySetInnerHTML={{ __html: this.state.bookHtml }}></div>
              </li>
            </ul>
          ) : null
        }
        {
          this.state.isReadingMode ? (
            this.renderBook()
          ) : null
        }
        {
          <ViewerScrollbar current={20} total={309} />
        }
      </div>
    )
  }
}

export default connect(
  (state, ownProps: any) => {
    return {
      book: state.entities.books[ownProps.params.id] ? state.entities.books[ownProps.params.id] : {},
      session: state.session
    }
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Viewer)
