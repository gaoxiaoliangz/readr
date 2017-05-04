import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import * as actions from '../../actions'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Template from '../../../renderers/Template'

const BOOK_ID = '58f5eb3f746f4be3a429fe8c'

interface Props {
}

interface LocalState {
  pageData: Atom[][][],
  page: number
}

interface AllProps extends Props {
  routing: any
  actions: typeof actions
  data: {
    [key: string]: any
    fetchMore: any
    bookPages: {
      edges: {
        cursor: string
        node: {
          elements: ParsedNode[]
          meta: {
            pageNo: number
            offset: number
          }
        }
      }[]
    }
  }
}

const query = gql`
  query BookPages($bookId: String!, $before: String, $after: String, $first: Int, $last: Int) {
    bookPages(pageHeight: 600, bookId: $bookId, first: $first, last: $last, before: $before, after: $after) {
      edges {
        cursor
        node {
          id
          meta {
            pageNo
            offset
          }
          elements {
            ...elementsRecursive
          }
        }
      }
    }
  }

  fragment elementFields on HTMLElementObject  {
    tag
    type
    text
    id
    attrs {
      id
      href
      src
    }
  }

  fragment elementsRecursive on HTMLElementObject {
    ...elementFields
    children {
			...elementFields
      children {
				...elementFields
        children {
					...elementFields
          children {
            ...elementFields
          }
        }
      }
    }
  }
`

class Next extends Component<AllProps, LocalState> {

  constructor(props) {
    super(props)
    this.state = {
      pageData: [],
      page: 1
    }
  }

  loadPage(direction: 'prev' | 'next' = 'next') {
    const { data: { fetchMore } } = this.props
    const fistItemCursor = _.first(this.props.data.bookPages.edges).cursor
    const lastItemCursor = _.last(this.props.data.bookPages.edges).cursor

    fetchMore({
      query,
      variables: {
        bookId: BOOK_ID,
        before: direction === 'prev' && fistItemCursor,
        after: direction === 'next' && lastItemCursor,
        first: direction === 'next' ? 1 : null,
        last: direction === 'prev' ? 1 : null
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        let edges = direction === 'next'
         ? [...previousResult.bookPages.edges, ...fetchMoreResult.bookPages.edges]
         : [...fetchMoreResult.bookPages.edges, ...previousResult.bookPages.edges]

        const merged = Object.assign({}, previousResult, {
          bookPages: {
            edges
          }
        })

        return merged
      }
    })
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>loading</div>
      )
    }

    const wrapperStyle: React.CSSProperties = {
      overflow: 'hidden',
      height: 600
    }

    const {
      data: {
        bookPages: {
          edges
        }
      }
    } = this.props
    return (
      <div>
        <button onClick={() => {
          this.loadPage('prev')
        }}>prev</button>
        {
          edges.map((edge, index) => {
            const innerStyle: React.CSSProperties = {
              marginTop: (edge.node.meta || {} as any).offset || 0
            }
            return (
              <div key={index} style={wrapperStyle}>
                <div style={innerStyle}>
                  <Template
                    htmlObjects={edge.node.elements || []}
                  />
                </div>
              </div>
            )
          })
        }
        <button onClick={() => {
          this.loadPage('next')
        }}>next</button>
      </div>
    )
  }
}

const NextWithData = graphql(
  query,
  {
    options: () => {
      return {
        variables: {
          bookId: BOOK_ID,
          first: 1,
          after: 'YXJyYXljb25uZWN0aW9uOjE1'
        }
      }
    }
  }
)(Next)

export default NextWithData
