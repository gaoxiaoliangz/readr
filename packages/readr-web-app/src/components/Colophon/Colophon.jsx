import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './Colophon.scss?global'

const Colophon = ({ dark }) => {
  const linkClass = classNames(!dark ? 'link--dark' : 'link--light')
  return (
    <div className={classNames('colophon', dark && 'colophon--dark')}>
      <div className="container">
        <span>© 2018 readrweb.com, all rights reserved.</span>
        <div className="links">
          <Link className={linkClass} to="/blog">Blog</Link>
          <span className="sep">/</span>
          <Link className={linkClass} to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Colophon
