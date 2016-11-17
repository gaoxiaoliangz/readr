export const h = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (innerHTML, node) {
    let hLevel = node.tagName.charAt(1)
    let hPrefix = ''
    const hEnd = ' TODO'

    for (let i = 0; i < hLevel; i++) {
      hPrefix += '#'
    }

    return '\n' + hPrefix + ' ' + innerHTML + hEnd + '\n\n'
  }
}

export const span = {
  filter: ['span'],

  replacement: function (innerHTML, node) {
    return innerHTML
  }
}

export const div = {
  filter: ['div'],

  replacement: function (innerHTML, node) {
    return innerHTML
  }
}
