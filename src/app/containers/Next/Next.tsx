import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import * as actions from '../../actions'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import request from '../../../utils/network/request'
import Template from '../../../renderers/Template'

// import {
//   QueryRenderer,
//   graphql,
// } from 'react-relay'
// import environment from '../../createRelayEnvironment'

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
query BookPages($bookId: String!, $after: String) {
	bookPages(pageHeight: 600, bookId: $bookId, first: 1, after: $after) {
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

}
`
  // children {
	// 	...elementFields
  // }
    // children {
		// 	...elementFields
    //   children {
		// 		...elementFields
    //     children {
		// 			...elementFields
    //       children {
    //         ...elementFields
    //       }
    //     }
    //   }
    // }

class Next extends Component<AllProps, LocalState> {

  constructor(props) {
    super(props)
    this.state = {
      pageData: [],
      page: 1
    }
  }

  componentDidMount() {
    // this.loadPage()
  }

  loadPage(page = 1) {
    // request(`/api/books/58f5eb3f746f4be3a429fe8c/pages/${page}`, {
    //   query: {
    //     pageHeight: 600
    //   }
    // }).then(data => {
    //   this.setState({
    //     pageData: data.json,
    //     page
    //   })
    // })
    const { data: { fetchMore } } = this.props
    fetchMore({
      query,
      variables: {
        bookId: BOOK_ID,
        after: _.last(this.props.data.bookPages.edges).cursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        // console.log(_.last(previousResult.bookPages.edges).cursor)
        // console.log(_.last(fetchMoreResult.bookPages.edges).cursor)
        const previousResult2 = _.cloneDeep(previousResult.bookPages.edges)
        console.log(previousResult2);
        

        return Object.assign({}, previousResult, {
          // Append the new feed results to the old one
          bookPages: {
            edges: [...previousResult2, ...fetchMoreResult.bookPages.edges],
          }
        })
      }
      // updateQuery: (...args) => {
      //   // const previousResult = args[0]
      //   // const { fetchMoreResult } = args[1]
      //   // const edges = [...previousResult.bookPages.edges, ...fetchMoreResult.bookPages.edges]
      //   // const result = {
      //   //   ...fetchMoreResult,
      //   //   ...{
      //   //     bookPages: {
      //   //       ...{
      //   //         edges
      //   //       }
      //   //     }
      //   //   }
      //   // }
      //   // return result
      //   // return args[0]
      //   return args[1]
      // }
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
          this.loadPage(this.state.page - 1)
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
          this.loadPage(this.state.page + 1)
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
          after: 'YXJyYXljb25uZWN0aW9uOjE1'
        }
      }
    }
  }
)(Next)

export default NextWithData
