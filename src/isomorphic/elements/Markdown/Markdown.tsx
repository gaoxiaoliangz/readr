import React, { Component } from 'react'
import marked from 'marked'
import $ from 'jquery'
import _ from 'lodash'
const ReactMarkdown = require('react-markdown')

interface Props {
  input: string
  /**
   * line 为自定义的 renderer, 在 marked 完成后运行，可能对性能有影响
   * line(node)
   */
  markedRenderers?: any
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
      <ReactMarkdown
        className={className}
        source={input}
        renderers={renderers || {}}
        escapeHtml={false}
        skipHtml={false}
        />
    )
  }

  renderUnSafely(className) {
    const { input, markedRenderers } = this.props
    let renderer = new marked.Renderer()

    if (markedRenderers) {
      _.forEach(markedRenderers, (val, key) => {
        if (key !== 'line') {
          renderer[key] = val
        }
      })
    }

    let html = marked(input, {
      gfm: false,
      breaks: true,
      renderer
    })

    if (markedRenderers && markedRenderers.line) {
      html = Array.prototype
        .filter.call($(html), ele => {
          // 移除元素间的回车及字符串
          return ele.nodeType !== 3
        })
        .map(ele => {
          return markedRenderers.line(ele)
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
