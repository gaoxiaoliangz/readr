import React, { Component } from 'react'
import HTMLObjectsRenderer from '../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'

interface Props {
  bookPages: Schema.BookPages
  onLoadPage: (direction: 'prev' | 'next') => any
}

const height = 600

export default class BookContainer extends Component<Props, void> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {
      bookPages: {
        totalCount,
        edges
      }
    } = this.props

    let pageStyle: React.CSSProperties = {
      overflow: 'hidden',
      height,
      position: 'absolute'
    }

    const containerStyle: React.CSSProperties = {
      height: totalCount * height
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
