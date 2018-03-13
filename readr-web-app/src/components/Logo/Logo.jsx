import React from 'react'
import { Link } from 'react-router-dom'
import PT from 'prop-types'
import styles from './Logo.scss'

const Logo = props => {
  const { dark, to } = props
  const styleName = dark ? 'logo--dark' : 'logo'

  return (
    <h1 className={styles['logo-wrap']}>
      <Link className={styles[styleName]} to={to}>readr</Link>
    </h1>
  )
}

Logo.propTypes = {
  to: PT.string,
  dark: PT.bool
}

Logo.defaultProps = {
  to: '/'
}

export default Logo
