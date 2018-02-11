import React from 'react'
import { Link } from 'react-router-dom'
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
              ? (
                <React.Fragment>
                  <span styleName="item item--text">{username}</span>
                  <Link styleName="item" className="link--light" to="/shelf">Shelf</Link>
                </React.Fragment>
              )
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
