import React, { Component } from 'react'
import Switcher from '../../../elements/Switcher'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import classnames from 'classnames'
import { THEMES as THEME_DEFS } from '../../../constants/viewerDefs'
import _ from 'lodash'
const styles = require('./ViewerPreference.scss')

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12

interface AllProps {
  actions?: typeof actions
  fontSize?: number
  isScrollMode?: boolean
  theme?: string
}

const mapStateToProps = (state, ownProps) => {
  const { fontSize, isScrollMode, theme } = selectors.viewer.config(state)

  return { fontSize, isScrollMode, theme }
}

@CSSModules(styles)
class ViewerPreference extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  handleDecFontSizeClick() {
    const { fontSize } = this.props
    const { isDecDisabled } = this.getBtnStatus()

    if (!isDecDisabled) {
      this.props.actions.changeViewerFontSize(fontSize - 1)
    }
  }

  handleIncFontSizeClick() {
    const { fontSize } = this.props
    const { isIncDisabled } = this.getBtnStatus()

    if (!isIncDisabled) {
      this.props.actions.changeViewerFontSize(fontSize + 1)
    }
  }

  handleChangeThemeClick(key) {
    this.props.actions.changeViewerTheme(key)
  }

  handleToggleScrollModeClick(val) {
    this.props.actions.toggleViewerScrollMode(val)
  }

  getBtnStatus() {
    const { fontSize } = this.props
    const isDecDisabled = fontSize <= MIN_FONT_SIZE
    const isIncDisabled = fontSize >= MAX_FONT_SIZE

    return { isDecDisabled, isIncDisabled }
  }

  render() {
    const { isDecDisabled, isIncDisabled } = this.getBtnStatus()
    const { isScrollMode, theme } = this.props

    const btnDecClass = classnames({
      'btn': !isDecDisabled,
      'btn--disabled': isDecDisabled
    })

    const btnIncClass = classnames({
      'btn': !isIncDisabled,
      'btn--disabled': isIncDisabled
    })

    return (
      <div styleName="viewer-preference">
        <ul className="options">
          <li styleName="option-font-size">
            <span styleName={btnDecClass} onClick={this.handleDecFontSizeClick.bind(this)}>A-</span>
            <span styleName={btnIncClass} onClick={this.handleIncFontSizeClick.bind(this)}>A+</span>
          </li>
          <li styleName="option-scroll">
            <span className="label">滚动模式</span>
            <Switcher
              value={isScrollMode}
              onChange={this.handleToggleScrollModeClick.bind(this)}
              />
          </li>
          <li styleName="option-theme">
            {
              _.keys(THEME_DEFS).map((key, index) => {
                const className = key.toLowerCase() + (theme === key ? '--active' : '')
                console.log(className, theme, key)

                return (
                  <span
                    key={index}
                    className={styles[className]}
                    onClick={this.handleChangeThemeClick.bind(this, key)}
                    >
                    {key}
                  </span>
                )
              })
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default connect<AllProps, {}, {}>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(ViewerPreference)
