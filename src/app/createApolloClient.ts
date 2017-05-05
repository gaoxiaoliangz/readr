import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8090/gql'
})

const createApolloClient = () => {
  const client = new ApolloClient({
    networkInterface: networkInterface
  })
  return client
}

export default createApolloClient
