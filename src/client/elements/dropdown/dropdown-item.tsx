import React from 'react'
const styles = require('./_dropdown.scss')

type TProps = {
  children?: any
}

function DropdownItem(props: TProps) {
  return (
    <li className={styles['dropdown-item']}>
      {props.children}
    </li>
  )
}

export default DropdownItem
