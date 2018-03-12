import React from 'react'
// import { Link } from 'react-router-dom'
import PT from 'prop-types'
import classNames from 'classnames'
import './Colophon.scss'

const Colophon = ({ dark }) => {
  // const linkClass = classNames(!dark ? 'link--dark' : 'link--light')
  return (
    <div styleName={classNames('colophon', dark && 'colophon--dark')}>
      <div className="container">
        <span>© 2018 readrweb.com, all rights reserved.</span>
        {/* <div styleName="links">
          <Link className={linkClass} to="/contact">Contact</Link>
          <span className="sep">/</span>
          <Link className={linkClass} to="/about">About</Link>
        </div> */}
      </div>
    </div>
  )
}

Colophon.defaultProps = {
  dark: false
}

Colophon.propTypes = {
  dark: PT.bool
}

export default Colophon
