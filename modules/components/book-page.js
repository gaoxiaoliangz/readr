import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'

class BookPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let page = this.props.page
    // console.log(page);
    //     liStyle,
    //     pStyle,
    //     currentPage
    //
    // if(page.style){
    //   if(this.props.config.mode === "VERTICAL") {
    //     liStyle = {
    //       top: page.style.top,
    //       position: page.style.position,
    //       height: page.style.height
    //     }
    //     pStyle = {
    //       marginTop: page.style.marginTop
    //     }
    //   }
    //   currentPage = page.index + 1
    // }


// style={(index===0)?pStyle:{}}



    return (
      <li>
        <div className="content">
          {
            page.map((node, index) => {
              if (node.type !== "p") {
                console.error("Unsupported content found!")
              }
              return (
                <p key={index}>{node.props.children}</p>
              )
            })
          }
        </div>
        <div className="page-no"></div>
      </li>
    )
  }
}

export default BookPage
