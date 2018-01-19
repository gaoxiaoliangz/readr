import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/Logo'
import './Branding.scss'

const Branding = ({ dark }) => {
  return (
    <div className={classNames('branding', dark && 'branding--dark')}>
      <div className="clearfix">
        <div className="left">
          <Logo dark={!dark} />
        </div>
        <div className="right">
          <a className="link link--light" href="#">Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Branding
