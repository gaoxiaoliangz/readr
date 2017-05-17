import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './BookProgress.scss'

interface Props {
  current: number
  total: number
}

@CSSModules(styles)
class BookProgress extends Component<Props, void> {

  constructor(props) {
    super(props)
  }

  render() {
    const { current, total } = this.props
    const percentage = ((current / total) * 100).toFixed(2) + '%'

    return (
      <div styleName="loc-info">
        <div styleName="container">
          <div>
            <div>{current}<span styleName="sep">/</span>{total}</div>
            <div styleName="sub-info">{percentage}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookProgress
