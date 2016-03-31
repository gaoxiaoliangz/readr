import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'

class BookPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let page = this.props.page
    let style = this.props.style

    return (
      <li style={style}>
        <div className="content">
          {
            page.props.children.map((node, index) => {
              if (node.type !== "p") {
                console.error("Unsupported content found!")
              }
              return (
                <p key={index}>{node.props.children}</p>
              )
            })
          }
        </div>
        <div className="page-no">{page.props.pageNo}</div>
      </li>
    )
  }
}

export default BookPage
