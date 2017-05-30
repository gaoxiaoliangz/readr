import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions/viewer'
import * as selectors from '../../../selectors'
import classnames from 'classnames'
import { VIEWER_DEFS } from '../../../../constants'
import styles from './VPreference.scss'
import { Slide } from '../../../components/animations'
import Backdrop from '../../../components/Backdrop'
// import Switcher from '../../../components/Switcher'

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12
const SIZE_STEP = 2

interface OwnProps {
  show: boolean
}

interface OtherProps {
  actions: typeof actions
  fontSize: number
  isScrollMode: boolean
  theme: string
  bookId: string
}

const mapStateToProps = (state, ownProps) => {
  const { fontSize, isScrollMode, theme } = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)

  return { fontSize, isScrollMode, theme, bookId }
}

@CSSModules(styles)
class VPreference extends Component<OtherProps & OwnProps, {}> {

  constructor(props) {
    super(props)
    this.handleDropbackClick = this.handleDropbackClick.bind(this)
    this.handleChangeFontSizeClick = this.handleChangeFontSizeClick.bind(this)
  }

  handleChangeFontSizeClick(newSize) {
    return () => {
      if (newSize >= MIN_FONT_SIZE && newSize <= MAX_FONT_SIZE) {
        // this.props.actions.configViewer({
        //   fontSize: newSize
        // })
        this.props.actions.initializeViewer(this.props.bookId, {
          fontSize: newSize
        })
      }
    }
  }

  handleChangeThemeClick(key) {
    this.props.actions.configViewer({
      theme: key
    })
  }

  // handleToggleScrollModeClick(val) {
  //   this.props.actions.configViewer({
  //     isScrollMode: val
  //   })
  // }

  handleDropbackClick() {
    this.props.actions.toggleViewerPreference(false)
  }

  getBtnStatus() {
    const { fontSize } = this.props
    const isDecDisabled = fontSize <= MIN_FONT_SIZE
    const isIncDisabled = fontSize >= MAX_FONT_SIZE

    return { isDecDisabled, isIncDisabled }
  }

  render() {
    const { isDecDisabled, isIncDisabled } = this.getBtnStatus()
    const { theme, show, fontSize } = this.props

    const btnDecClass = classnames({
      'btn': !isDecDisabled,
      'btn--disabled': isDecDisabled
    })

    const btnIncClass = classnames({
      'btn': !isIncDisabled,
      'btn--disabled': isIncDisabled
    })

    return (
      <Slide direction="down">
        {
          show && (
            <div styleName="viewer-preference">
              <ul className="options">
                <li styleName="option-font-size">
                  <span styleName={btnDecClass} onClick={this.handleChangeFontSizeClick(fontSize - SIZE_STEP)}>A-</span>
                  <span styleName={btnIncClass} onClick={this.handleChangeFontSizeClick(fontSize + SIZE_STEP)}>A+</span>
                </li>
                {/*<li styleName="option-scroll">
                  <span className="label">滚动模式</span>
                  <Switcher
                    value={isScrollMode}
                    onChange={this.handleToggleScrollModeClick.bind(this)}
                  />
                </li>*/}
                <li styleName="option-theme">
                  {
                    _.keys(VIEWER_DEFS.THEMES).map((key, index) => {
                      const className = key.toLowerCase() + (theme === key ? '--active' : '')

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
        <Backdrop
          show={show}
          onClick={this.handleDropbackClick}
        />
      </Slide>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(VPreference)
