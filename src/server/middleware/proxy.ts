import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({})

/**
 * @param target the url
 */
function proxyMid(target: string, fn: (req, res) => boolean) {
  return (req, res, next) => {
    if (fn(req, res)) {
      proxy.web(req, res, { target })
    } else {
      next()
    }
  }
}

export default proxyMid
