import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import { Link } from 'react-router-dom'
import model from './bookModel'
import { FETCH_STATUS } from '../../constants'
import LayoutEstimator from './LayoutEstimator'
import FlippableBookPage from './FlippableBookPage'
import TopPanel from './TopPanel'
import styles from './Book.scss'
import Icon from '../../components/Icon/Icon'
import LeftPanel from '../../components/LeftPanel/LeftPanel'
import PopBox from '../../components/PopBox/PopBox'
import ScrollableBookPage from './ScrollableBookPage'
import Toc from './Toc'
import Pref from './Pref'

class Book extends Component {
  static propTypes = {
    book: PT.object.isRequired,
    pages: PT.array.isRequired,
    bookNodes: PT.array.isRequired,
    bookStatus: PT.string.isRequired,
    isEstimatingLayout: PT.bool.isRequired,
    bookReady: PT.bool.isRequired,
    showTopPanel: PT.bool.isRequired,
    showToc: PT.bool.isRequired,
    showPref: PT.bool.isRequired,
    config: PT.object.isRequired,
    clientProgress: PT.number.isRequired,
    disableScrollListener: PT.bool.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }

  lastScrollTop = 0

  componentWillMount() {
    let pageHeight = window.innerHeight - 120
    const rest = pageHeight % this.props.config.lineHeight
    pageHeight -= rest
    model.initConfig({
      pageHeight
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    model.initBook(id) // eslint-disable-line
    window.addEventListener('mousemove', this.handleMousemove)
    window.goTo = this.goTo
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMousemove)
    model.destroy()
  }

  goTo(progress) {
    model.$set('clientProgress', progress)
  }

  handleCalcDone = result => {
    model.putLayoutInfo(result)
  }

  handleMousemove = e => {
    const show = e.clientY < 70
    if (show !== this.props.showTopPanel) {
      model.$set('showTopPanel', show)
    }
  }

  handleTocLinkClick = item => {
    model.goToChapter(item.substr(1))
    model.$set('showToc', false)
  }

  handleProgressChange = progress => {
    model.$set('clientProgress', progress)
    model.updateRemoteProgress(progress) // eslint-disable-line
  }

  renderMenuIcon() {
    return (
      <div
        styleName="menu-icon"
        onClick={() => {
          model.$set('showToc', true)
        }}
      >
        <Icon name="menu" size={20} />
      </div>
    )
  }

  renderPref() {
    const { showPref, config } = this.props
    return (
      <div styleName="preference-icon">
        <Icon
          name="font"
          size={20}
          onClick={() => {
            model.$set('showPref', !showPref)
          }}
        />
        <PopBox
          show={showPref}
          onRequestClose={() => {
            model.$set('showPref', false)
          }}
          position={{
            right: 0,
            top: 68
          }}
        >
          <Pref
            fontSize={config.fontSize}
            theme={config.theme}
            scrollMode={config.scrollMode}
            onChangeScrollModeRequest={status => {
              if (status !== config.scrollMode) {
                model.toggleScrollMode(status)
              }
            }}
            onChangeFontSizeRequest={(fontSize) => {
              model.changeFontSize(fontSize)
            }}
            onChangeThemeRequest={(theme) => {
              model.$set('config.theme', theme)
            }}
          />
        </PopBox>
      </div>
    )
  }

  renderHeaderCenter() {
    const { book } = this.props
    return (
      <div styleName="header-center">
        <div styleName="header-inner">
          <div styleName="title">{book.title}</div>
          <div styleName="author">{book.author}</div>
        </div>
      </div>
    )
  }

  render() {
    const {
      book,
      bookStatus,
      bookNodes,
      isEstimatingLayout,
      bookReady,
      pages,
      showTopPanel,
      showToc,
      showPref,
      config,
      clientProgress,
      disableScrollListener
    } = this.props
    const isFetching = bookStatus === FETCH_STATUS.FETCHING
    const bookInfo = _.pick(book, ['title', 'author'])
    return (
      <div className={`${styles['book']} ${styles[`book--${config.theme}`]}`}>
        {
          !isFetching
            && (
              <div>
                {
                  isEstimatingLayout && (
                    <LayoutEstimator
                      onCalcDone={this.handleCalcDone}
                      sections={bookNodes}
                      config={config}
                    />
                  )
                }
                <TopPanel
                  left={this.renderMenuIcon()}
                  center={this.renderHeaderCenter()}
                  right={this.renderPref()}
                  show={showTopPanel || showToc || showPref}
                />
                <LeftPanel
                  show={showToc}
                  onRequestClose={() => {
                    model.$set('showToc', false)
                  }}
                >
                  <div styleName="contents-label">
                    <Link to="/">Back to shelf</Link>
                  </div>
                  <div styleName="contents-label">Contents</div>
                  <Toc
                    toc={book.structure || []}
                    onLinkClick={this.handleTocLinkClick}
                  />
                </LeftPanel>
                {
                  bookReady && (
                    config.scrollMode
                      ? (
                        <ScrollableBookPage
                          disableScrollListener={disableScrollListener}
                          progress={clientProgress}
                          pages={pages}
                          config={config}
                          onProgressChange={this.handleProgressChange}
                        />
                      )
                      : (
                        <FlippableBookPage
                          bookInfo={bookInfo}
                          progress={clientProgress}
                          pages={pages}
                          config={config}
                          onProgressChange={this.handleProgressChange}
                        />
                      )
                  )
                }
              </div>
            )
        }
      </div>
    )
  }
}

export default model.connect(Book, (state, props) => {
  const bookId = props.match.params.id
  return {
    ...state.book,
    bookNodes: _.get(state, ['book', 'bookNodes', bookId], []),
    book: _.get(state, ['shelf', 'localBooks', bookId], {
      content: []
    }),
    pages: _.get(state, ['book', 'bookPages', bookId], [])
  }
})
