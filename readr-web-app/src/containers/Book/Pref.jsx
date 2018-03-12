import React, { Component } from 'react'
import { Switch } from 'antd'
import _ from 'lodash'
import classNames from 'classnames'
import PT from 'prop-types'
import styles from './Pref.scss'

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12
const SIZE_STEP = 2

const THEMES = {
  WHITE: 'white',
  NIGHT: 'night',
  SEPIA: 'sepia'
}

class Pref extends Component {
  static propTypes = {
    onChangeFontSizeRequest: PT.func.isRequired,
    onChangeThemeRequest: PT.func.isRequired,
    onChangeScrollModeRequest: PT.func.isRequired,
    fontSize: PT.number.isRequired,
    scrollMode: PT.bool.isRequired,
    theme: PT.string.isRequired,
  }

  handleChangeFontSizeClick = (newSize) => {
    return () => {
      if (newSize >= MIN_FONT_SIZE && newSize <= MAX_FONT_SIZE) {
        this.props.onChangeFontSizeRequest(newSize)
      }
    }
  }

  handleChangeThemeClick = (key) => {
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
    const { theme, fontSize, scrollMode, onChangeScrollModeRequest } = this.props

    const btnDecClass = classNames({
      'btn': !isDecDisabled,
      'btn--disabled': isDecDisabled
    })

    const btnIncClass = classNames({
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
              _.map(THEMES, (val, index) => {
                const className = val + (theme === val ? '--active' : '')

                return (
                  <span
                    key={index}
                    className={styles[className]}
                    onClick={this.handleChangeThemeClick(val)}
                  >
                    {val}
                  </span>
                )
              })
            }
          </li>
          <li styleName="sc-mode">
            <span styleName="text">Enable scroll mode</span>
            <Switch checked={scrollMode} onChange={onChangeScrollModeRequest} />
          </li>
        </ul>
      </div>
    )
  }
}

export default Pref
