import httpProxy from 'http-proxy'
import EventEmitter from 'events'

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter()
const myEmitter1 = new MyEmitter()

const proxy = httpProxy.createProxyServer({})
const wsProxy = httpProxy.createServer({
  target: 'ws://localhost:4001',
  ws: true
})

// const assetsProxy = (target: string) => (req, res, next) => {
//   if ((req.url.indexOf('/static') !== -1) || req.url.indexOf('/sockjs-node') !== -1) {
//     proxy.web(req, res, { target })
//     proxy.ws(req, res, { target })
//   } else {
//     next()
//   }
// }

// myEmitter1.on('upgrade', () => {
//   console.log('upgrade received')
// })

wsProxy.on('upgrade2', function (req, socket, head) {
  console.log('upgrade in ws')
  proxy.ws(req, socket, head)
})

export const hmrProxy = (target: string) => (req, res, next) => {
  if (req.url.indexOf('/sockjs-nodeff') !== -1) {
    console.log('emit hmr')
    wsProxy.emit('upgrade', req, req.client, req.headers)
    // res.end()
    next()
  } else {
    next()
  }
}

export const assetsProxy = (target: string) => (req, res, next) => {
  if ((req.url.indexOf('/static') !== -1) || (req.url.indexOf('/sockjs-node') !== -1)) {
    proxy.web(req, res, { target })
  } else {
    next()
  }
}

export default assetsProxy
