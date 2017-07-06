import _ from 'lodash'
import React from 'react'
import { graphql } from 'react-apollo'
import AUTHORS_QUERY from './Authors.gql'

const loadData = (props) => {
  return () => {
    props.data.fetchMore({
      variables: {
        after: (_.last(props.data.authors.edges) as any).cursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return Object.assign({}, previousResult, {
          authors: {
            ...fetchMoreResult.authors,
            ...{
              edges: [...previousResult.authors.edges, ...fetchMoreResult.authors.edges],
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
        props.data.authors.edges.map(edge => {
          return (
            <div key={edge.node.id}>{edge.node.name}</div>
          )
        })
      }
      <button onClick={loadData(props)}>load more</button>
    </div>
  )
}

const withData = graphql(AUTHORS_QUERY)

export default withData(Authors)
