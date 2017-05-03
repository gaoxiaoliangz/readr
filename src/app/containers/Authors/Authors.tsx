import _ from 'lodash'
import React from 'react'
import { graphql, gql } from 'react-apollo'

const query = gql`
  query Authors($after: String) {
    viewer {
      authors(first: 1, after: $after) {
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  }
`

const loadData = (props) => {
  return () => {
    props.data.fetchMore({
      query,
      variables: {
        after: (_.last(props.data.viewer.authors.edges) as any).cursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return Object.assign({}, previousResult, {
          viewer: {
            authors: {
              edges: [...previousResult.viewer.authors.edges, ...fetchMoreResult.viewer.authors.edges],
            }
          }
        })
      }
    })
  }
}

const Authors = props => {
  if (props.data.loading) {
    return <div>loading</div>
  }
  return (
    <div>
      {
        props.data.viewer.authors.edges.map(edge => {
          return (
            <div key={edge.node.id}>{edge.node.name}</div>
          )
        })
      }
      <button onClick={loadData(props)}>load more</button>
    </div>
  )
}

const AuthorsWithData = graphql(query)(Authors)

export default AuthorsWithData
