import React from 'react'
import { Link } from 'react-router'
import styles from './Logo.scss'

type TProps = {
  children?: any
  to?: string
  dark?: boolean
}

function Logo(props: TProps) {
  const { dark, to } = props
  const styleName = dark ? 'logo--dark' : 'logo'

  return (
    <h1 className={styles['logo-wrap']}>
      <Link className={styles[styleName]} to={to}>readr</Link>
    </h1>
  )
}

Logo['defaultProps'] = {
  to: '/'
}

export default Logo
