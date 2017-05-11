import React, { Component } from 'react'
import _ from 'lodash'
import HTMLObjectsRenderer from '../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'
import CSSModules from 'react-css-modules'
import styles from './BookContainer.scss'

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

@CSSModules(styles)
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
      position: 'absolute',
      width: '100%'
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
              top: (page - 1) * height
            }
            return (
              <div key={index} style={pageStyle} className={`book-page book-page-${edge.node.meta.pageNo}`}>
                <div style={innerStyle}>
                  <div styleName="page-no">{edge.node.meta.pageNo}</div>
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
