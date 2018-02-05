import React from 'react'
import cx from 'classnames'
import Logo from '../Logo/Logo'
import './Branding.scss'

const Branding = ({ dark, signedIn, username, onSignInClick, onSignOutClick }) => {
  return (
    <div styleName={cx('branding', dark && 'branding--dark')}>
      <div className="clearfix">
        <div className="left">
          <Logo dark={!dark} />
        </div>
        <div className="right">
          {
            signedIn
              ? <span styleName="item">{username}</span>
              : <a styleName="item" className="link--light" href="#" onClick={onSignInClick}>Sign in with Google</a>
          }
          {
            signedIn && <a styleName="item" className="link--light" href="#" onClick={onSignOutClick}>Sign out</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Branding
