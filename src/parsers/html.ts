import jsdom from 'jsdom'

const parseHTML = HTMLString => {
  return jsdom.jsdom(HTMLString, {
    features: {
      FetchExternalResources: [],
      ProcessExternalResources: false
    }
  })
}

export default parseHTML
