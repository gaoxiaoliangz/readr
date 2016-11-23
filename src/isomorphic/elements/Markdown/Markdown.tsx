import React, { Component } from 'react'
import marked from 'marked'
import $ from 'jquery'
const ReactMarkdown = require('react-markdown')

interface Props {
  input: string
  /**
   * 如果不使用 safe
   * 那么 renderers 是一个由全大写标签名作为 key 组成的 object，值是一个回调函数，参数是 marked 的返回值
   * 'P': (node) => void
   * 'ALL': 优先级比任何具体的标签都要低
   */
  renderers?: any
  safe?: boolean
  className?: string
}

class Markdown extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  renderSafely(className) {
    const { input, renderers } = this.props

    return (
      <ReactMarkdown className={className} source={input} renderers={renderers || {}} />
    )
  }

  renderUnSafely(className) {
    const { input, renderers } = this.props

    let html = marked(input, {
      gfm: true,
      breaks: true
    })

    if (renderers) {
      html = Array.prototype
        .filter.call($(html), ele => {
          // 移除元素间的回车及字符串
          return ele.nodeType !== 3
        })
        .map(ele => {
          const tagName = ele.tagName

          if (renderers[tagName]) {
            return renderers[tagName](ele)
          }

          if (renderers['ALL']) {
            return renderers['ALL'](ele)
          }

          return ele.outerHTML
        })
        .join('')
    }

    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  }

  render() {
    const { safe, className } = this.props

    return safe
      ? this.renderSafely(className)
      : this.renderUnSafely(className)
  }
}

Markdown['defaultProps'] = {
  safe: true
}

export default Markdown
