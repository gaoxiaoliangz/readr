import { REST_API_PATH, GRAPHQL_API_PATH } from '../config'

function getAPIRoot() {
  return {
    rest: __BROWSER__ ? REST_API_PATH : `http://localhost:${process.env.PORT}${REST_API_PATH}`,
    graphql: __BROWSER__ ? GRAPHQL_API_PATH : `http://localhost:${process.env.PORT}${GRAPHQL_API_PATH}`
  }
}

export default getAPIRoot
