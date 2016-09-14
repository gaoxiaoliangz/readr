import React from 'react'
const styles = require('./Dropdown.scss')

type TProps = {
  children?: any
}

function DropdownItem(props: TProps) {
  return (
    <li>
      {
        typeof props.children === 'string'
          ? (
            <div className={styles['dropdown-item']}>{props.children}</div>
          )
          : React.cloneElement(props.children, {
            className: styles['dropdown-item']
          })
      }
    </li>
  )
}

export default DropdownItem
