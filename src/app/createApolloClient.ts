import { ApolloClient, createNetworkInterface } from 'react-apollo'
import getAPIRoot from './helpers/getAPIRoot'

const graphqlURI = getAPIRoot().graphql

const networkInterface = createNetworkInterface({
  uri: graphqlURI,
  opts: {
    credentials: 'same-origin'
  }
})

const createApolloClient = () => {
  const client = new ApolloClient({
    networkInterface: networkInterface
  })
  return client
}

export default createApolloClient
