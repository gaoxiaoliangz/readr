import argv from './helpers/parsed-argv'
import express from 'express'

/**
 * Server 支持的选项
 * --hot 热重载
 * --production 生产环境
 * --noRender 服务端渲染
 * --noRoute 服务端路由
 */

const app = express()
const appEnv = app.get('env')

let render = !Boolean(argv['noRender'])
const hot = Boolean(argv['hot'])
const route = !Boolean(argv['noRoute'])

if (route === false) {
  render = false
}

let production = Boolean(argv['production'])

if (appEnv === 'production') {
  production = true
}

const options = {
  hot,
  render,
  route,
  production
}

export default options
