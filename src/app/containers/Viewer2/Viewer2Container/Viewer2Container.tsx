import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import BookContainer from '../BookContainer/BookContainer'
import Panel from '../../../components/Panel'
import Logo from '../../../components/Logo'
import Icon from '../../../components/Icon'
import styles from './Viewer2Container.scss'
import LeftPanel from '../../../components/LeftPanel'
import PopBox from '../../../components/PopBox'
import * as selectors from '../../../selectors'
import BookToc from '../../../components/BookToc'
import BookProgress from '../BookProgress/BookProgress'
import Viewer2Pref from '../Viewer2Pref/Viewer2Pref'

interface OwnProps {
  bookPages: Schema.BookPages
  bookInfo: Schema.BookInfo
  // onLoadPage: (direction: 'prev' | 'next') => any
  onScroll?: (direction: 'up' | 'down') => void
  onDebuncedScroll?: (e: Event, direction: 'up' | 'down') => void
  onDebuncedResize?: (view) => void
  onReachBottom?: () => void
  renderConfig: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
  }
}

interface StateProps {
  actions: typeof actions
  components: Viewer.Components
  localProgress: Viewer.LocalProgress[]
  viewerConfig: Viewer.Config
}

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  const id = selectors.viewer.id(state)
  const localProgress = selectors.viewer.localProgress(id)(state)
  const config = selectors.viewer.config(state)
  return {
    components,
    localProgress,
    viewerConfig: config
  }
}

@CSSModules(styles)
class Viewer2Container extends Component<StateProps & OwnProps, {}> {
  _handleResizeDebounced: any
  _handleScrollDebounced: any
  _handleScroll: any
  scrollTop: number[]

  constructor(props) {
    super(props)
    this.scrollTop = []
    this._handleResizeDebounced = _.debounce(this._onResize.bind(this), 500, {
      maxWait: 1000
    })
    this._handleScrollDebounced = _.debounce(this._onDebouncedScroll.bind(this), 200, {
      maxWait: 1000
    })
    this._handleScroll = this._onScroll.bind(this)
  }

  componentDidMount() {
    this._addEventListeners()
  }

  componentWillUnmount() {
    this._removeEventListeners()
  }

  _judgeScrollDirection() {
    const scrollTop = document.body.scrollTop
    this.scrollTop.push(scrollTop)
    const scrollCount = this.scrollTop.length
    if (scrollCount >= 2) {
      const delta = _.last(this.scrollTop) - this.scrollTop[scrollCount - 2]

      if (delta >= 0) {
        return 'down'
      }
      return 'up'
    }
  }

  _onScroll() {
    const direction = this._judgeScrollDirection()
    if (this.props.onScroll && direction) this.props.onScroll(direction)

    // check if page reached bottom
    if (document.body.scrollTop + window.innerHeight === document.body.clientHeight) {
      if (this.props.onReachBottom) this.props.onReachBottom()
    }
  }

  _onDebouncedScroll(e) {
    const direction = this._judgeScrollDirection()
    if (this.props.onDebuncedScroll && direction) this.props.onDebuncedScroll(e, direction)
  }

  _onResize() {
    if (this.props.onDebuncedResize) this.props.onDebuncedResize('a')
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleScrollDebounced)
    window.addEventListener('scroll', this._handleScroll)
    window.addEventListener('resize', this._handleResizeDebounced)
  }

  _removeEventListeners() {
    window.removeEventListener('scroll', this._handleScrollDebounced)
    window.removeEventListener('scroll', this._handleScroll)
    window.removeEventListener('resize', this._handleResizeDebounced)
  }

  render() {
    const {
      components: { showNavigation, showPanel, showPreference }, bookInfo, bookPages: { totalCount },
      renderConfig,
      viewerConfig,
      localProgress
    } = this.props

    return (
      <div>
        <Panel
          show={showPanel}
          position="top"
        >
          <div styleName="container">
            <div styleName="left">
              <div
                styleName="menu"
                onClick={() => {
                  this.props.actions.viewer.toggleViewerNavigation(true)
                }}
              >
                <Icon name="menu" size={20} />
              </div>
            </div>

            <div styleName="center">
              <div styleName="logo">
                <Logo
                  dark
                />
              </div>
              <span styleName="sep"></span>
              <span styleName="title">{bookInfo.title}</span>
            </div>

            <div styleName="right">
              <div
                styleName="preference"
              >
                <Icon
                  name="font"
                  size={20}
                  onClick={() => {
                    this.props.actions.viewer.toggleViewerPreference(true)
                  }}
                />
                <PopBox
                  show={showPreference}
                  onRequestClose={() => {
                    this.props.actions.viewer.toggleViewerPreference(false)
                  }}
                  position={{
                    right: 0
                  }}
                >
                  <Viewer2Pref
                    fontSize={viewerConfig.fontSize}
                    theme={viewerConfig.theme}
                    onChangeFontSizeRequest={(fontSize) => {
                      this.props.actions.viewer.configViewer({
                        fontSize
                      })
                    }}
                    onChangeThemeRequest={(theme) => {
                      this.props.actions.viewer.configViewer({
                        theme
                      })
                    }}
                    isScrollMode={true}
                  />
                </PopBox>
              </div>
            </div>
          </div>
        </Panel>
        <LeftPanel
          show={showNavigation}
          onRequestClose={() => {
            this.props.actions.viewer.toggleViewerNavigation(false)
          }}
        >
          <div>目录</div>
          <BookToc
            toc={this.props.bookInfo.toc}
            onLinkClick={() => {
              this.props.actions.viewer.toggleViewerNavigation(false)
            }}
          />
        </LeftPanel>
        <BookContainer
          bookPages={this.props.bookPages}
          config={{
            ...renderConfig,
            theme: viewerConfig.theme
          }}
        />
        <Panel
          show={showPanel}
          position="bottom"
        >
          <BookProgress
            current={(_.last(localProgress) || {})['page']}
            total={totalCount}
          />
        </Panel>
      </div>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(Viewer2Container)
