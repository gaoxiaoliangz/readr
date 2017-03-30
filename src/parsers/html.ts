import jsdom from 'jsdom'

const parseHTML = HTMLString => {
  return jsdom.jsdom(HTMLString, {
    features: {
      FetchExternalResources: [],
      ProcessExternalResources: false
    }
  })
}

const a = parseHTML('<div>hehehe</div>') as any
const c = a.childNodes
console.log(a.innerHTML)

export default parseHTML
