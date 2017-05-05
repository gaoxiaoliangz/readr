import React, { Component } from 'react'
import HTMLObjectsRenderer from '../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'

interface Props {
  bookPages: QBookPages
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
        <button onClick={() => {
          this.props.onLoadPage('prev')
        }}>prev</button>
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
        <button onClick={() => {
          this.props.onLoadPage('next')
        }}>next</button>
      </div>
    )
  }
}
