import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../elements/Icon'
import Fade from '../../../elements/Fade'
import ViewerPreference from './ViewerPreference'
import ViewerNav from './ViewerNav'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
const styles = require('./ViewerPanel.scss')

interface Props {
  title: string
  showViewerPreference: boolean
  onPrefVisibilityChange: (newVisibility: boolean) => void
}

interface AllProps extends Props {
  showPanel?: boolean
  config?: ViewerConfig
  actions?: typeof actions
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const { show: showPanel } = selectors.viewer.panel(state)
  return { config, showPanel }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles)
export default class ViewerPanel extends Component<AllProps, void> {

  constructor(props) {
    super(props)
    // this.state = {
    //   showViewerPreference: false
    // }
    this.handlePrefClick = this.handlePrefClick.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
  }

  handlePrefClick() {
    this.props.onPrefVisibilityChange(!this.props.showViewerPreference)
  }

  handelViewerMouseMove(event) {
    const { config: { isCalcMode, isTouchMode }, showPanel } = this.props

    if (!isCalcMode && !isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      const show = y < 90
      if (showPanel !== show) {
        this.props.actions.toggleViewerPanel(show)
      }
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handelViewerMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handelViewerMouseMove)
  }

  render() {
    const { title, showViewerPreference, showPanel } = this.props

    return showPanel && (
      <div styleName="viewer-panel">
        <div styleName="container">
          <div styleName="back">
            <Link to="/">
              <Icon name="back" />
              <span>返回</span>
            </Link>
          </div>
          <div styleName="contents">
            <span>目录</span>
            <Fade>
              <ViewerNav />
            </Fade>
          </div>
          <span styleName="title">{title}</span>
          <div onClick={this.handlePrefClick} styleName="preference">
            <Icon name="preference" />
          </div>
          <Fade>
            {
              showViewerPreference && (
                <ViewerPreference />
              )
            }
          </Fade>
        </div>
      </div>
    )
  }
}
