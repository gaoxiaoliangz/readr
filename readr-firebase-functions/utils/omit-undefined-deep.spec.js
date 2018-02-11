const omitUndefinedDeep = require('./omit-undefined-deep')

const replacer = '-'

test('omit-undefined-deep 1', () => {
  const result = omitUndefinedDeep({
    a: undefined,
    b: 1
  }, {
    replaceUndefinedWith: replacer
  })
  expect(result).toEqual({
    a: replacer,
    b: 1
  })
})

test('omit-undefined-deep 2', () => {
  const result = omitUndefinedDeep({
    a: undefined,
    b: 1,
    c: {
      a: undefined,
      b: 2
    }
  })
  expect(result).toEqual({
    a: null,
    b: 1,
    c: {
      a: null,
      b: 2
    }
  })
})

test('omit-undefined-deep 3', () => {
  const result = omitUndefinedDeep({
    a: undefined,
    b: 1,
    c: {
      a: undefined,
      b: 2
    },
    d: [
      {
        a: 1,
        b: undefined
      }
    ]
  })
  expect(result).toEqual({
    a: null,
    b: 1,
    c: {
      a: null,
      b: 2
    },
    d: [
      {
        a: 1,
        b: null
      }
    ]
  })
})

test('omit-undefined-deep 4', () => {
  const result = omitUndefinedDeep([{
    name: '第一章 回答在牛奶箱里',
    sectionId: 'id11',
    nodeId: undefined,
    path: 'text/part0002.html',
    playOrder: '1',
    children: undefined
  },
  {
    name: '第二章 深夜的口琴声',
    sectionId: 'id12',
    nodeId: undefined,
    path: 'text/part0003.html',
    playOrder: '2',
    children: undefined
  }], {
    replaceUndefinedWith: replacer
  })
  expect(result).toEqual([{
    name: '第一章 回答在牛奶箱里',
    sectionId: 'id11',
    nodeId: replacer,
    path: 'text/part0002.html',
    playOrder: '1',
    children: replacer
  },
  {
    name: '第二章 深夜的口琴声',
    sectionId: 'id12',
    nodeId: replacer,
    path: 'text/part0003.html',
    playOrder: '2',
    children: replacer
  }])
})
