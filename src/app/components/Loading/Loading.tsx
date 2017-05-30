import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import styles from './Loading.scss'
import loadingGif from './loading.gif'
import NProgress from './nprogress'

interface Props {
  backdrop?: boolean
  text?: string
  center?: boolean
  useDynamicDots?: boolean
  useNProgress?: boolean
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
    const { useNProgress } = this.props
    if (useNProgress) {
      NProgress.start()
    }

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
    if (this.props.useNProgress) {
      NProgress.done()
    }
  }

  render() {
    const { text, center, useDynamicDots, useNProgress } = this.props
    const { dynamicDots } = this.state

    const wrapClass = classnames({
      'loading-wrap--center': center,
      'loading-wrap': !center
    })

    if (useNProgress) {
      return <div></div>
    }

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
