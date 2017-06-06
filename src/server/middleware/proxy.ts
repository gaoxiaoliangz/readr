import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({})

/**
 * @param target the url
 */
function proxyMid(target: string) {
  return (req, res, next) => {
    if ((req.url.indexOf('/static') !== -1) || (req.url.indexOf('/sockjs-node') !== -1)) {
      proxy.web(req, res, { target })
    } else {
      next()
    }
  }
}

export default proxyMid
