import React from 'react'
import styles from './style.scss'

type Props = {
  children?: any
  htmlObjects: ParsedNode[]
}

const renderObjects = (objects: ParsedNode[]) => {
  return objects.map((object, index) => {
    const { tag, type, text, children } = object

    if (type === 3) {
      return text
    }

    if (children) {
      return React.createElement(tag, { key: index, className: styles['line'] }, renderObjects(children))
    }
    return React.createElement(tag, { key: index, className: styles['line'] })
  })
}

function Template(props: Props) {
  const { htmlObjects } = props
  return (
    <div className={styles['section']}>
      {
        renderObjects(htmlObjects)
      }
    </div>
  )
}

export default Template
