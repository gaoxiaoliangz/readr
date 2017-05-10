import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import { THEMES as THEME_DEFS } from '../../../../constants/viewerDefs'
import styles from './Viewer2Pref.scss'

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12
const SIZE_STEP = 2

interface OwnProps {
  fontSize: number
  isScrollMode: boolean
  theme: Viewer.Themes
  onChangeFontSizeRequest: (fontSize: number) => void
  onChangeThemeRequest: (themeName: Viewer.Themes) => void
}

@CSSModules(styles)
class Viewer2Pref extends Component<OwnProps, void> {

  constructor(props) {
    super(props)
    this.handleChangeFontSizeClick = this.handleChangeFontSizeClick.bind(this)
    this.handleChangeThemeClick = this.handleChangeThemeClick.bind(this)
  }

  handleChangeFontSizeClick(newSize) {
    return () => {
      if (newSize >= MIN_FONT_SIZE && newSize <= MAX_FONT_SIZE) {
        this.props.onChangeFontSizeRequest(newSize)
      }
    }
  }

  handleChangeThemeClick(key) {
    return () => {
      this.props.onChangeThemeRequest(key)
    }
  }

  getBtnStatus() {
    const { fontSize } = this.props
    const isDecDisabled = fontSize <= MIN_FONT_SIZE
    const isIncDisabled = fontSize >= MAX_FONT_SIZE

    return { isDecDisabled, isIncDisabled }
  }

  render() {
    const { isDecDisabled, isIncDisabled } = this.getBtnStatus()
    const { theme, fontSize } = this.props

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
            <span styleName={btnDecClass} onClick={this.handleChangeFontSizeClick(fontSize - SIZE_STEP)}>A-</span>
            <span styleName={btnIncClass} onClick={this.handleChangeFontSizeClick(fontSize + SIZE_STEP)}>A+</span>
          </li>
          <li styleName="option-theme">
            {
              _.keys(THEME_DEFS).map((key, index) => {
                const className = key.toLowerCase() + (theme === key ? '--active' : '')

                return (
                  <span
                    key={index}
                    className={styles[className]}
                    onClick={this.handleChangeThemeClick(key)}
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

export default Viewer2Pref
