// data structure
// const htmlObject = [
//   {
//     tag: 'h1',
//     children: [
//       'Title'
//     ]
//   },
//   {
//     tag: 'p',
//     children: [
//       'first line', // these two should combine
//       'second line'
//     ]
//   }
// ]

interface RectInfo {
  width: number
  height: number
  flow: 'follow' | 'block'
  char: string
  tag: string
}

const getRectInfo = (char, tag): RectInfo => {
  return {
    width: 16,
    height: 16,
    flow: 'follow',
    char,
    tag
  }
}

export const readRecursively = objects => {
  const rects = []
  const _read = (_objects) => {
    _objects.forEach(obj => {
      if (obj.children) {
        obj.children.forEach(child => {
          if (typeof child === 'string') {
            rects.push(getRectInfo(child, obj.tag))
          } else {
            _read([child])
          }
        })
      } else {
        const obj2 = obj
      }
    })
  }
  _read(objects)
  return rects
}
