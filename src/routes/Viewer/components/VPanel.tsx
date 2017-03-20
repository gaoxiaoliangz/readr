import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../components/Icon'
import { Fade, Slide } from '../../../components/animations'
import VPreference from './VPreference'
import VNav from './VNav'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewer as viewerActions } from '../../../actions'
import * as selectors from '../../../selectors'
import isDescendant from '../../../utils/dom/isDescendant'
import styles from './VPanel.scss'

interface AllProps {
  showPanel?: boolean
  showPreference?: boolean
  showNavigation?: boolean
  config?: Viewer.Config
  viewerActions?: typeof viewerActions
  title?: string
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const { showPanel, showNavigation, showPreference } = selectors.viewer.components(state)
  const { title } = selectors.entity('books', bookId)(state)

  return { config, showPanel, showPreference, title, showNavigation }
}

@CSSModules(styles)
class VPanel extends Component<AllProps, void> {

  nav: HTMLDivElement
  pref: HTMLDivElement

  constructor(props) {
    super(props)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
    this.handleViewerClick = this.handleViewerClick.bind(this)
  }

  handleGlobalClick(e) {
    const { showPreference, showNavigation } = this.props

    if (!isDescendant(this.nav, e.target)) {
      if (showNavigation) {
        this.props.viewerActions.toggleViewerNavigation(false)
      }
    } else {
      this.props.viewerActions.toggleViewerNavigation()
    }

    if (!isDescendant(this.pref, e.target)) {
      if (showPreference) {
        this.props.viewerActions.toggleViewerPreference(false)
      }
    } else {
      this.props.viewerActions.toggleViewerPreference()
    }
  }

  handelViewerMouseMove(event) {
    const { config: { isCalcMode, isTouchMode }, showPanel, showNavigation, showPreference } = this.props

    if (!isCalcMode && !isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      const show = y < 90

      if (!show && (showNavigation || showPreference)) {
        return false
      }

      if (showPanel !== show) {
        this.props.viewerActions.toggleViewerPanel(show)
      }
    }
  }

  handleViewerClick() {
    const { config: { isTouchMode } } = this.props

    if (isTouchMode) {
      this.props.viewerActions.toggleViewerPanel()
      // this.props.viewerActions.toggleViewerProgressInfo()
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handelViewerMouseMove)
    window.addEventListener('click', this.handleGlobalClick)
    window.addEventListener('click', this.handleViewerClick)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handelViewerMouseMove)
    window.removeEventListener('click', this.handleGlobalClick)
    window.removeEventListener('click', this.handleViewerClick)
  }

  render() {
    const { title, showPanel, showPreference, showNavigation } = this.props

    return (
      <Slide>
        {
          (showPanel) && (
            <div styleName="viewer-panel">
              <div styleName="container">
                <div styleName="back">
                  <Link to="/">
                    <Icon
                      size={20}
                      name="back"
                      style={{
                        marginTop: 4
                      }}
                    />
                    <span>返回</span>
                  </Link>
                </div>

                <div ref={ref => { this.nav = ref }} styleName="contents">
                  <span>目录</span>
                  <Fade>
                    {
                      showNavigation && (
                        <VNav />
                      )
                    }
                  </Fade>
                </div>

                <span styleName="title">{title}</span>

                <div ref={ref => { this.pref = ref }} styleName="preference">
                  <Icon name="preference" />
                  <Fade>
                    {
                      showPreference && (
                        <VPreference />
                      )
                    }
                  </Fade>
                </div>
              </div>
            </div>
          )
        }
      </Slide>
    )
  }
}

export default connect<AllProps, {}, {}>(
  mapStateToProps,
  dispatch => ({
    viewerActions: bindActionCreators(viewerActions as {}, dispatch)
  })
)(VPanel)
