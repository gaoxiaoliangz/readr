export default async function txtContent(target) {
  const nav = [{
    ref: 'part01',
    label: '第一章节',
    index: 0
  }]
  let content

  if (typeof target === 'string') {
    const buffer = new Buffer(target, 'binary')
    content = buffer.toString()
  } else if (Buffer.isBuffer(target)) {
    content = target.toString()
  } else {
    throw new Error('Only string or buffer is supported!')
  }

  const flesh = [{
    src: 'part01',
    markdown: content
  }]

  return { nav, flesh }
}
