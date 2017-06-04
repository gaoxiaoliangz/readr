import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({})

const assetsProxy = (target: string) => (req, res, next) => {
  if (req.url.indexOf('/static') !== -1) {
    proxy.web(req, res, { target })
  } else {
    next()
  }
}

export default assetsProxy
