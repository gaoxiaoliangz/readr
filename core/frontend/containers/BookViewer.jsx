import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getCache, setCache, initBook, getView, getProgress, setProgress, convertPercentageToPage, filterPages, readCache, saveCache, callApi } from 'utils'
import * as actions from 'actions'
import { API_ROOT } from 'constants/APIS'
import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'
import Confirm from 'components/Confirm'
import Icon from 'elements/Icon'
import * as utils from 'utils'

import * as renderBook from 'utils/renderBook'

let windowWidth
if(typeof window !== 'undefined') {
  windowWidth = window.innerWidth
}

let latestProgress = {}
let currentProgress = {}
let isResolvingProgressRejection = false

class BookViewer extends Component {

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      scrollTop: 0,
      currentPage: 0,
      showPanel: true,
      isListenersAdded: false,
      isCalculatingDom: false,
      isReadingMode: false,
      isScrollMode: true,
      calculatedPages: null,
      view: getView()
    }
  }

  scrollTo(position) {
    let pageCount = this.state.calculatedPages.props.children.length
    let pageHeight = this.state.calculatedPages.props.view.pageHeight
    let height = pageCount * pageHeight

    if(position < 1) {
      this.setState({
        currentPage: convertPercentageToPage(position, pageCount),
        scrollTop: position * height
      })
      document.body.scrollTop = pageCount * pageHeight * position
    }else{
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
        view: getView()
      })
    }

    window.addEventListener('scroll', this.mapScrollTopToState)
    window.addEventListener('resize', this.mapWindowWidthToState)
    window.addEventListener('resize', this.mapViewToState)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.mapScrollTopToState)
    window.removeEventListener('resize', this.mapWindowWidthToState)
    window.removeEventListener('resize', this.mapViewToState)
  }

  toggleBookPanel(event) {
    if(this.state.calculatedPages.props.view.screen === 'hd') {
      var y = event.pageY - document.body.scrollTop

      if(y < 90){
        this.setState({
          showPanel: true
        })
      }else{
        this.setState({
          showPanel: false
        })
      }
    }
  }

  clickToToggleBookPanel() {
    if(this.state.calculatedPages.props.view.screen === 'phone') {
      this.setState({
        showPanel: !this.state.showPanel
      })
    }
  }

  calculateDom() {
    console.log('calculating dom ...');
    let html = this.state.bookHtml
    let bookId = this.bookId
    let view = getView()
    // console.log(this.refs.bookHtml.childNodes);
    // let nodeHeights = renderBook.getNodeHeights(document.querySelector('ul.pages>li>.content').childNodes)
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
    let pages = getCache(`book${bookId}_pages`)
    const bookId = this.props.params.id

    // check if pages are cached
    if(pages){
      pages = JSON.parse(pages)

      this.setState({
        isReadingMode: true,
        calculatedPages: pages,
        bookHtml: renderBook.pagesToHtml(pages)
      })
    } else {
      this.props.actions.fetchBookContent(bookId).then(res => {
        this.setState({
          isCalculatingDom: true,
          bookHtml: res.response.html
        })
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(!utils.compareObjects(this.state.view, nextState.view)) {
      console.log('update');
      this.setState({
        isCalculatingDom: true,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.isCalculatingDom && !prevState.isCalculatingDom) {
      this.calculateDom()
    }
    if(this.state.calculatedPages && !prevState.calculatedPages) {
      setTimeout(() => {
        this.scrollTo(10)
      }, 1)
    }
  }

  componentWillReceiveProps(nextProps) {
    // if(this.props.confirm.isVisible === true) {
    //   if(nextProps.confirm.result === 'yes') {
    //     this.scrollTo(latestProgress.percentage)
    //   }
    //   if(nextProps.confirm.result === 'no') {
    //     isResolvingProgressRejection = true
    //     this.scrollTo(currentProgress.percentage)
    //   }
    // }
  }

  componentDidMount() {
    const actions = this.props.actions
    const bookId = this.props.params.id

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId)
    actions.fetchBookProgress(bookId)

    this.addEventListeners()
    this.loadCalculatedPages()

  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  renderBook() {
    let scrollTop = this.state.scrollTop
    let calculatedPages = this.state.calculatedPages
    let bookId = this.props.params.id
    let view = calculatedPages.props.view
    let height = calculatedPages.props.children.length * view.pageHeight
    let currentPage = renderBook.convertPercentageToPage(scrollTop/height, calculatedPages.props.children.length)

    let pages = renderBook.filterPages({
      startPage: currentPage,
      offset: 2,
      quantity: 5,
      pages: calculatedPages.props.children
    })

    return (
      <div onClick={this.clickToToggleBookPanel.bind(this)}>
        <BookPageList height={height} view={view} bookId={bookId} pages={pages} />
      </div>
    )
  }

  render() {
    let book = this.props.book
    let view = this.state.view

    return (
      <div className={`viewer viewer--${view.screen}`} onMouseMove={this.toggleBookPanel.bind(this)} >
        <Confirm confirm={this.props.confirm} />
        {
          this.state.isLoading || book.isFetchingInfo || book.isFetchingContent?(
            <Loading />
          ):null
        }
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.showPanel && this.state.isReadingMode && book.meta ?(
              <div className="viewer-panel">
                <div className="container">
                  <div className="back">
                    <Link to="/">
                      <Icon name="back" />
                      <span>返回</span>
                    </Link>
                  </div>
                  <span className="title">{book.meta.title}</span>
                  <div className="preference">
                    <Icon name="font" />
                  </div>

                  {/*<span className="loc">{book.currentPage+"/"+pages.length}</span>*/}
                </div>
              </div>
            ):null
          }
        </ReactCSSTransitionGroup>
        {
          (this.state.isCalculatingDom && book.html)?(
            <ul className="pages">
              <li>
                <div ref="bookHtml" className="content" dangerouslySetInnerHTML={{__html: book.html}}></div>
              </li>
            </ul>
          ):null
        }
        {
          this.state.isReadingMode?(
            this.renderBook()
          ):null
        }
      </div>
    )
  }
}

BookViewer.propTypes = {
  book: React.PropTypes.object.isRequired
}

export default connect(
  state => ({
    book: state.book,
    user: state.user,
    view: state.view,
    confirm: state.confirm
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
