import React from 'react'
import _ from 'lodash'
import styles from './HTMLObjectsRenderer.scss'

type Props = {
  children?: any
  fontSize: number
  width: number
  lineHeight: number
  htmlObjects: HtmlNodeObject[]
}

const renderObjects = (objects: HtmlNodeObject[], isRoot = false) => {
  return objects.map((object, index) => {
    const { tag, type, text, children, attrs } = object

    const props = {
      ...{
        key: index,
        className: isRoot ? styles['line'] : ''
      },
      ..._.omit(attrs, ['__typename', 'nodeId']),
      id: attrs && attrs.nodeId
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
  const { htmlObjects, width, lineHeight, fontSize } = props
  const sectionStyle: React.CSSProperties = {
    width,
    lineHeight: lineHeight > 2 ? `${lineHeight}px` : lineHeight,
    fontSize,
    fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif'
  }

  return (
    <div style={sectionStyle} className={styles['section']}>
      {
        renderObjects(htmlObjects, true)
      }
    </div>
  )
}

export default HTMLObjectsRenderer
