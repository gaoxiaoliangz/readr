import React from 'react'
const styles = require('./Dropdown.scss')

type TProps = {
}

function DropdownItemSep(props: TProps) {
  return (
    <li className={styles['sep']}></li>
  )
}

export default DropdownItemSep
