import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import BookContainer from './BookContainer'
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel'
import Logo from '../../components/Logo'
import Icon from '../../components/Icon'
import styles from './Viewer2Container.scss'

interface OwnProps {
  bookPages: QBookPages
  showHeaderPanel: boolean
  onLoadPage: (direction: 'prev' | 'next') => any
  onScroll?: (direction: 'up' | 'down') => void
  onDebuncedScroll?: (direction: 'up' | 'down') => void
  onDebuncedResize?: (view) => void
  onReachBottom?: () => void
}

interface StateProps {
  actions: typeof actions
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

@CSSModules(styles)
class Viewer2Container extends Component<StateProps & OwnProps, {}> {
  _handleResizeDebounced: typeof _.debounce
  _handleScrollDebounced: typeof _.debounce
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

  _onDebouncedScroll() {
    const direction = this._judgeScrollDirection()
    if (this.props.onDebuncedScroll && direction) this.props.onDebuncedScroll(direction)
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
    const { showHeaderPanel } = this.props

    return (
      <div>
        <HeaderPanel
          show={showHeaderPanel}
        >
          <div styleName="container">
            <div styleName="left">
              <div
                styleName="menu"
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
              <span styleName="title">{'abc'}</span>
            </div>

            <div styleName="right">
              <div
                styleName="preference"
              >
                <Icon name="font" size={20} />
              </div>
            </div>
          </div>
        </HeaderPanel>
        <BookContainer
          bookPages={this.props.bookPages}
          onLoadPage={this.props.onLoadPage}
        />
      </div>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(Viewer2Container)
