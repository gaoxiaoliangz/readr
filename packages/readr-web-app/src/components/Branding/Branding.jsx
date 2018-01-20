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
              ? <span className="item">{username}</span>
              : <a className="item link--light" href="#" onClick={onSignInClick}>Sign in with Google</a>
          }
          {
            signedIn && <a className="item link--light" href="#" onClick={onSignOutClick}>Sign out</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Branding
