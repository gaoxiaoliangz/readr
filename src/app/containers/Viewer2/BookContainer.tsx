import React, { Component } from 'react'
import _ from 'lodash'
import HTMLObjectsRenderer from '../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'

interface Props {
  bookPages: Schema.BookPages
  onLoadPage: (direction: 'prev' | 'next') => any
  config: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
  }
}

export default class BookContainer extends Component<Props, void> {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  render() {
    const {
      bookPages: { totalCount, edges },
      config
    } = this.props

    const height = config.pageHeight
    const rendererConfig = {
      lineHeight: config.lineHeight,
      fontSize: config.fontSize,
      width: config.width
    }

    let pageStyle: React.CSSProperties = {
      overflow: 'hidden',
      height,
      position: 'absolute'
    }

    const containerStyle: React.CSSProperties = {
      height: totalCount * height,
      position: 'relative'
    }

    return (
      <div style={containerStyle}>
        {
          edges.map((edge, index) => {
            const innerStyle: React.CSSProperties = {
              marginTop: edge.node.meta.offset || 0
            }
            const page = edge.node.meta.pageNo
            pageStyle = {
              ...pageStyle,
              top: page * height
            }
            return (
              <div key={index} style={pageStyle}>
                <div style={innerStyle}>
                  <HTMLObjectsRenderer
                    htmlObjects={edge.node.elements || []}
                    {...rendererConfig}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
