import React from 'react'

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
      return React.createElement(tag, { key: index }, renderObjects(children))
    }
    return React.createElement(tag, {})
  })
}
        // {/*htmlObjects.map(object => {
        //   return React.createElement('p')
        // })*/}
function Template(props: Props) {
  const { htmlObjects } = props
  return (
    <div>
      {
        renderObjects(htmlObjects)
      }
    </div>
  )
  // return (
  //   // <div>ok</div>
  //   React.createElement('div', {}, [<div>fff</div>, <p>ddd</p>])
  // )
  // return renderObjects(htmlObjects)
}

export default Template
