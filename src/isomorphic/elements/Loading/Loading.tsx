import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles = require('./Loading.scss')

interface Props {
  backdrop?: boolean
  text?: string
}

@CSSModules(styles)
class Loading extends Component<Props, {}> {
  render() {
    const { text } = this.props

    return (
      <div className="loading-wrap">
        <span styleName="text-loading">{text}</span>
      </div>
    )
  }
}

Loading['defaultProps'] = {
  text: '加载中 ...'
}

export default Loading
