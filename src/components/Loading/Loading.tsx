import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import styles from './Loading.scss'
import loadingGif from './loading.gif'

interface Props {
  backdrop?: boolean
  text?: string
  center?: boolean
  useDynamicDots?: boolean
}

interface State {
  dynamicDots?: string
}

@CSSModules(styles)
class Loading extends Component<Props, State> {

  intervalId: any

  constructor(props) {
    super(props)
    this.state = {
      dynamicDots: ''
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.dynamicDots.length === 3) {
        this.setState({ dynamicDots: '' })
      } else {
        this.setState({
          dynamicDots: this.state.dynamicDots + '.'
        })
      }
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { text, center, useDynamicDots } = this.props
    const { dynamicDots } = this.state

    const wrapClass = classnames({
      'loading-wrap--center': center,
      'loading-wrap': !center
    })

    return (
      <div styleName={wrapClass}>
        <p styleName="text-loading">
          <img styleName="gif" src={loadingGif} />
          <span>{text + (useDynamicDots ? dynamicDots : '...')}</span>
        </p>
      </div>
    )
  }
}

Loading['defaultProps'] = {
  text: '加载中',
  useDynamicDots: false
}

export default Loading
