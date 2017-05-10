import React, { Component } from 'react'
import HTMLObjectsRenderer from '../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'
import Button from '../../components/Button'

interface Props {
  bookPages: Schema.BookPages
  onLoadPage: (direction: 'prev' | 'next') => any
}

export default class BookContainer extends Component<Props, void> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const wrapperStyle: React.CSSProperties = {
      overflow: 'hidden',
      height: 600
    }

    const {
      bookPages: {
        edges
      }
    } = this.props
    return (
      <div>
        <Button
          onClick={() => {
            this.props.onLoadPage('prev')
          }}
          width={200}
        >加载上一页</Button>
        {
          edges.map((edge, index) => {
            const innerStyle: React.CSSProperties = {
              marginTop: (edge.node.meta || {} as any).offset || 0
            }
            return (
              <div key={index} style={wrapperStyle}>
                <div style={innerStyle}>
                  <HTMLObjectsRenderer
                    htmlObjects={edge.node.elements || []}
                  />
                </div>
              </div>
            )
          })
        }
        <Button
          onClick={() => {
            this.props.onLoadPage('next')
          }}
          width={200}
        >加载下一页</Button>
      </div>
    )
  }
}
