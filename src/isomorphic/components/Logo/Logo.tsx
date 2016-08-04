import React from 'react'
import { Link } from 'react-router'
const styles = require('./Logo.css')

type TProps = {
  children?: any
  to?: string
}

function Logo(props: TProps) {
  return (
    <h1 className={styles['logo-wrap']}>
      <Link className={styles['logo']} to={props.to}>readr</Link>
    </h1>
  )
}

export default Logo
