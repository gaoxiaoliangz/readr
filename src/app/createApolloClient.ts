import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  // todo
  // uri: 'http://localhost:8090/gql',
  uri: '/gql',
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
