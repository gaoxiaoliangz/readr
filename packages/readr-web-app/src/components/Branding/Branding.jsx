import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/Logo'
import './Branding.scss'

const Branding = ({ dark, signedIn, username, onSignInClick, onSignOutClick }) => {
  return (
    <div className={classNames('branding', dark && 'branding--dark')}>
      <div className="clearfix">
        <div className="left">
          <Logo dark={!dark} />
        </div>
        <div className="right">
          {
            signedIn
              ? username
              : (
                <a className="link link--light" href="#" onClick={onSignInClick}>Sign In</a>
              )
          }
          {
            signedIn && (
              <a className="link link--light" href="#" onClick={onSignOutClick}>Sign Out</a>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Branding
