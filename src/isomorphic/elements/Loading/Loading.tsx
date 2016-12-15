import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import styles from './Loading.scss'

interface Props {
  backdrop?: boolean
  text?: string
  center?: boolean
}

interface State {
  dynamicText?: string
}

@CSSModules(styles)
class Loading extends Component<Props, State> {

  intervalId: any

  constructor(props) {
    super(props)
    this.state = {
      dynamicText: ''
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.dynamicText.length === 3) {
        this.setState({ dynamicText: '' })
      } else {
        this.setState({
          dynamicText: this.state.dynamicText + '.'
        })
      }
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { text, center } = this.props
    const { dynamicText } = this.state

    const wrapClass = classnames({
      'loading-wrap--center': center,
      'loading-wrap': !center
    })

    return (
      <div styleName={wrapClass}>
        <span styleName="text-loading">{text + dynamicText}</span>
      </div>
    )
  }
}

Loading['defaultProps'] = {
  text: '加载中'
}

export default Loading
