import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
import { initBookConfig, loadBook } from '../../actions'

class Book extends Component {
  static propTypes = {
    book: PT.object.isRequired,
    pages: PT.array.isRequired,
    bookNodes: PT.array.isRequired,
    loadStatus: PT.string.isRequired,
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
    }),
    initBookConfig: PT.func.isRequired,
    loadBook: PT.func.isRequired
  }

  lastScrollTop = 0

  componentDidMount() {
    const { id } = this.props.match.params
    // model.initBook(id) // eslint-disable-line
    window.addEventListener('mousemove', this.handleMousemove)
    // window.goTo = this.goTo

    console.log('mount')
    let pageHeight = window.innerHeight - 120
    const rest = pageHeight % this.props.config.lineHeight
    pageHeight -= rest
    this.props.initBookConfig({
      pageHeight
    })
    this.props.loadBook(id)
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
    const chapter = item.substr(1)
    model.goToChapter(chapter)
    model.$set('showToc', false)
  }

  handleLinkClick = link => {
    // TODO
    let chapter = link.split('#')[0]
    chapter = _.last(chapter.split('/'))
    chapter = chapter.split('.')[0]
    model.goToChapter(chapter)
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
      loadStatus,
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
    const isFetching = loadStatus === FETCH_STATUS.FETCHING
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
                        onLinkClick={this.handleLinkClick}
                      />
                    )
                    : (
                      <FlippableBookPage
                        bookInfo={bookInfo}
                        progress={clientProgress}
                        pages={pages}
                        config={config}
                        onProgressChange={this.handleProgressChange}
                        onLinkClick={this.handleLinkClick}
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

export default connect(
  (state, props) => {
    const bookId = props.match.params.id
    return {
      ...state.book,
      bookNodes: _.get(state, ['book', 'bookNodes', bookId], []),
      book: _.get(state, ['shelf', 'localBooks', bookId], {
        content: []
      }),
      pages: _.get(state, ['book', 'bookPages', bookId], [])
    }
  },
  {
    initBookConfig,
    loadBook
  }
)(Book)
