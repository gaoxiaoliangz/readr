import init from './init'
import matchRoute from './matchRoute'
import fetchData from './fetchData'
import renderView from './renderView'
import handleError from './handleError'

const render = (isProduction) => {
  return [init, matchRoute, fetchData, renderView(isProduction), handleError]
}

export default render
