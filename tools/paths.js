const path = require('path')
const fs = require('fs')
const url = require('url')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.
// Jest doesn’t need this because it already handles `NODE_PATH` out of the box.

// Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
// Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
// https://github.com/facebookincubator/create-react-app/issues/1023#issuecomment-265344421

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp)

const envPublicUrl = process.env.PUBLIC_URL

function ensureSlash(path, needsSlash) { // eslint-disable-line
  const hasSlash = path.endsWith('/')
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1)
  } else if (!hasSlash && needsSlash) {
    return path + '/'
  }
  return path
}

function getPublicUrl(appPackageJson) {
  return envPublicUrl || require(appPackageJson).homepage // eslint-disable-line
}

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson)
  const servedUrl = envPublicUrl || (
    publicUrl ? url.parse(publicUrl).pathname : '/'
  )
  return ensureSlash(servedUrl, true)
}

// config after eject: we're in ./config/
module.exports = {
  resolveApp,
  root: resolveApp('./'),
  src: resolveApp('src'),
  serverSrc: resolveApp('src/server'),
  config: resolveApp('config'),
  build: resolveApp('build'),
  clientIndex: resolveApp('src/app/index.tsx'),
  clientTestIndex: resolveApp('src/app/testIndex.tsx'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appStyles: resolveApp('src/app/styles'),
  graphqlQueries: resolveApp('src/app/graphql'),
  packageJson: resolveApp('package.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  nodeModules: resolveApp('node_modules'),
  nodePaths,
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  buildAssets: resolveApp('build/assets'),

  // for webpack use only
  publicPath: '/static/',
}
