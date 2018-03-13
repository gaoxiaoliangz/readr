import React from 'react'
import { Link } from 'react-router-dom'
import BrandingContainer from '../../containers/BrandingContainer'
import Colophon from '../../components/Colophon/Colophon'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div styleName="not-found">
      <BrandingContainer dark />
      <div styleName="content" className="container">
        <h1>Not found!</h1>
        <p>Go back <Link to="/">home</Link></p>
      </div>
      <Colophon />
    </div>
  )
}

export default NotFound
