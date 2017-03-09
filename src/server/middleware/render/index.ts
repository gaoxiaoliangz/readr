import init from './init'
import matchRoute from './match-route'
import fetchData from './fetch-data'
import renderView from './render-view'
import handleError from './handle-error'

const render = (isProduction) => {
  return [init, matchRoute, fetchData, renderView(isProduction), handleError]
}

export default render
