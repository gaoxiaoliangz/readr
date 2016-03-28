import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import $ from 'jquery'
import Immutable from 'immutable'


class BookViewer extends Component {

  constructor(props) {
    super(props)
  }


  componentWillUnmount () {

  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc"></span>
          </div>
        </div>
        <div>rebuild</div>
        {/*<Pages />*/}
      </div>
    )
  }
}

class Pages extends Component {

  render() {
    let style = {}

    if(this.props.view) {
      if(this.props.config.mode === "VERTICAL") {
        style = {
          height: this.props.view.bookHeight
        }
      }
    }

    return (
      <div className="pages">
        <div className="container">
          <ul style={style}>
            {
              this.props.pages.map((page, index) => {
                return (
                  <Page key={index} page={page} config={this.props.config} />
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

class Page extends Component {
  render() {
    let page = this.props.page,
        liStyle,
        pStyle,
        currentPage

    if(page.style){
      if(this.props.config.mode === "VERTICAL") {
        liStyle = {
          top: page.style.top,
          position: page.style.position,
          height: page.style.height
        }
        pStyle = {
          marginTop: page.style.marginTop
        }
      }
      currentPage = page.index + 1
    }

    return (
      <li style={liStyle}>
        <div className="content">
          {
            page.content.map((ele, index) => {
              return (
                <p key={index} style={(index===0)?pStyle:{}}>{ele}</p>
              )
            })
          }
        </div>
        <div className="pg_num">{currentPage}</div>
      </li>
    )
  }
}

class Loading extends Component {
  render() {
    return (
      <div className="loading-wrap">
        <span className="icon icon-loading"></span>
      </div>
    )
  }
}

export default BookViewer
