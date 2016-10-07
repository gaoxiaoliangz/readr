import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
const styles = require('./Loading.scss')

interface Props {
  backdrop?: boolean
  text?: string
  center?: boolean
}

@CSSModules(styles)
class Loading extends Component<Props, {}> {
  render() {
    const { text, center } = this.props

    const wrapClass = classnames({
      'loading-wrap--center': center,
      'loading-wrap': !center
    })

    return (
      <div styleName={wrapClass}>
        <span styleName="text-loading">{text}</span>
      </div>
    )
  }
}

Loading['defaultProps'] = {
  text: '加载中 ...'
}

export default Loading
