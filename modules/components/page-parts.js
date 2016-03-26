import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

class ArchivedBranding extends Component {
  render() {
    return (
      <div className="branding">
        <div className="container-fluid">
          <h1 className="logo left">
            <a href={this.props.url}>
              <span className="icon-logo" />
            </a>
          </h1>
          <nav className="header-nav right">
            <ul>
              <li>
                <a href="http://liang.press">博客</a>
              </li>
              <li>
                <a href="https://github.com/gaoxiaoliangz">GitHub</a>
              </li>
              <li>
                <a href="mailto:gaoxiaoliangz@gmail.com">Email</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}


var ArchivedPageTitle = React.createClass({
  render: function(){
    return (
      <div className="page-title">
        <div className="container-fluid">
          <h1>存档的项目</h1>
        </div>
      </div>
    )
  }
})

var ArchivedPageFooter = ()=>{
  return (
    <div className="colophon">
      <div className="container">
        <a href="/" className="logo">
          <span className="icon-logo" />
        </a>
        <div className="info">
          <p>查看<a href="https://github.com/gaoxiaoliangz">我的个人项目</a>, 或者访问
            <a href="http://liang.press">我的博客</a>
          </p>
          <p>
            Copyright © 2015–2016 undesigned. All rights reserved.
          </p>
        </div>
        <div className="links">
          <a href="https://github.com/gaoxiaoliangz">
            <span className="icon-github" />
          </a>
          <a href="mailto:gaoxiaoliangz@gmail.com">
            <span className="icon-mail" />
          </a>
        </div>
      </div>
    </div>
  )
}

var PageParts = {
  ArchivedBranding: ArchivedBranding,
  ArchivedPageTitle: ArchivedPageTitle,
  ArchivedPageFooter: ArchivedPageFooter
}

export default PageParts
