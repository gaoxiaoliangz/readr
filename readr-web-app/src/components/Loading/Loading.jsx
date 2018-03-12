import React, { Component } from 'react'
import classNames from 'classnames'
import PT from 'prop-types'
import { Icon } from 'antd'
import './Loading.scss'
import NProgress from './nprogress'

class Loading extends Component {
  static propTypes = {
    text: PT.string,
    center: PT.bool,
    useDynamicDots: PT.bool,
    useNProgress: PT.bool,
    showPlaceholder: PT.bool,
    paddingBottom: PT.number,
  }

  static defaultProps = {
    text: 'Loading',
    useDynamicDots: false,
    showPlaceholder: false,
    useNProgress: true,
    center: true,
    paddingBottom: 200
  }

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

  _renderPlaceholder() {
    const { text, center, useDynamicDots, paddingBottom } = this.props
    const { dynamicDots } = this.state
    const wrapClass = classNames({
      'loading-wrap--center': center,
      'loading-wrap': !center
    })
    return (
      <div styleName={wrapClass} style={{ paddingBottom }}>
        <p styleName="text-loading">
          <Icon type="loading" style={{ fontSize: 18, marginRight: 5 }} spin />
          <span>{text + (useDynamicDots ? dynamicDots : '...')}</span>
        </p>
      </div>
    )
  }

  render() {
    const { useNProgress, showPlaceholder } = this.props

    if (useNProgress) {
      if (showPlaceholder) {
        return this._renderPlaceholder()
      }
      return ''
    }
    return this._renderPlaceholder()
  }
}

export default Loading
