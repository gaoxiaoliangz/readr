import React from 'react'
import _ from 'lodash'
import styles from './HTMLObjectsRenderer.scss'

type Props = {
  children?: any
  htmlObjects: ParsedNode[]
}

const renderObjects = (objects: ParsedNode[], isRoot = false) => {
  return objects.map((object, index) => {
    const { tag, type, text, children, attrs } = object
    const props = {
      ...{
        key: index,
        className: isRoot ? styles['line'] : ''
      },
      ..._.omit(attrs, '__typename')
    }

    if (type === 3) {
      return text
    }

    if (children) {
      return React.createElement(tag, props, renderObjects(children))
    }
    return React.createElement(tag, props)
  })
}

function HTMLObjectsRenderer(props: Props) {
  const { htmlObjects } = props
  return (
    <div className={styles['section']}>
      {
        renderObjects(htmlObjects, true)
      }
    </div>
  )
}

export default HTMLObjectsRenderer
