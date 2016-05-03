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
import Dialog from 'elements/Dialog'
import * as renderBook from 'utils/renderBook'


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
      view: getView(),
      isInitialProgressSet: false,
      showProgressDialog: false,
      latestProgress: 0
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

    this.setProgress = () => {
      let currentPageNo = this.props.book.pageNo
      this.props.actions.fetchBookProgress(this.bookId).then(action => {
        if(this.props.book.pageNo - currentPageNo > 5) {
          this.setState({
            showProgressDialog: true,
            latestProgress: this.props.book.percentage
          })
        }else{
          let pageSum = this.state.calculatedPages.props.children.length
          let height = pageSum * this.state.view.pageHeight
          let percentage = this.state.scrollTop/height
          let pageNo = convertPercentageToPage(percentage, pageSum)

          let progress = {
            pageNo,
            pageSum,
            percentage
          }

          setProgress(this.bookId, progress)
        }
      })
    }

    // TODO: use session to determine latest progress
    this.deboundedSetProgress = _.debounce(this.setProgress, 200)

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

    console.log(this.refs.bookHtml);
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
    const bookId = this.props.params.id
    let pages = getCache(`book${bookId}_pages`)

    // check if pages are cached
    if(pages){
      pages = JSON.parse(pages)

      this.setState({
        isReadingMode: true,
        calculatedPages: pages,
        bookHtml: renderBook.pagesToHtml(pages)
      })
    } else {
      this.props.actions.fetchBookContent(bookId)
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.book && nextProps.book.html && !this.props.book.html) {
      this.setState({
        isCalculatingDom: true,
        bookHtml: nextProps.book.html
      })
    }

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
    // if(this.state.calculatedPages && !prevState.calculatedPages) {
    //   // setTimeout(() => {
    //   //   this.scrollTo(10)
    //   // }, 1)
    // }

    // scroll to previous reading progress when opening a book
    if(this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
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

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId)
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
      <div className={`viewer viewer--${view.screen}`} onMouseMove={this.toggleBookPanel.bind(this)} >
        <Confirm confirm={this.props.confirm} />
        {
          this.state.isLoading || book.isFetchingInfo || book.isFetchingContent?(
            <Loading />
          ):null
        }
        {
          this.state.showProgressDialog? (
            <Dialog actions={actions} content="are you sure?"/>
          ):null
        }
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.showPanel && this.state.isReadingMode ?(
              <div className="viewer-panel">
                <div className="container">
                  <div className="back">
                    <Link to="/">
                      <Icon name="back" />
                      <span>返回</span>
                    </Link>
                  </div>
                  <span className="title">{book.title}</span>
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
          (this.state.isCalculatingDom && this.state.bookHtml)?(
            <ul className="pages">
              <li>
                <div ref="bookHtml" className="content" dangerouslySetInnerHTML={{__html: this.state.bookHtml}}></div>
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
  (state, ownProps) => {
    return {
      book: state.entities.books?state.entities.books[ownProps.params.id]:{},
      user: state.entities.userAuthInfo?state.entities.userAuthInfo.current:{}
    }
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
