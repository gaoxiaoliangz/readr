export default async function txtBinary(binaryFile) {
  const nav = [{
    ref: 'part01',
    label: '第一章节',
    index: 0
  }]

  const buffer = new Buffer(binaryFile, 'binary')
  const txt = buffer.toString()

  const flesh = {
    src: 'part01',
    markdown: txt
  }

  return { nav, flesh }
}
