import init from './init'
import matchRoute from './matchRoute'
import fetchData from './fetchData'
import renderView from './renderView'
import handleError from './handleError'

function render() {
  // renderView may have parameters later
  return [init, matchRoute, fetchData, renderView(), handleError]
}

export default render
