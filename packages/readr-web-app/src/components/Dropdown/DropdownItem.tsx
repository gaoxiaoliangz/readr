import React from 'react'
import styles from './Dropdown.scss'

type TProps = {
  children?: any
}

function DropdownItem(props: TProps) {
  return (
    <li>
      {
        typeof props.children === 'string'
          ? (
            <div className={styles['dropdown-item'] + ' text-overflow'}>{props.children}</div>
          )
          : React.cloneElement(props.children, {
            className: styles['dropdown-item'] + ' text-overflow'
          })
      }
    </li>
  )
}

export default DropdownItem
