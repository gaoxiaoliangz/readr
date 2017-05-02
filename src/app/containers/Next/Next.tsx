import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import request from '../../../utils/network/request'
import Template from '../../../renderers/Template'

// import {
//   QueryRenderer,
//   graphql,
// } from 'react-relay'

// import environment from '../../createRelayEnvironment'

interface Props {
}

interface LocalState {
  pageData: Atom[][][],
  page: number
}

interface AllProps extends Props {
  routing: any
  // sendNotification: any
  // loadSomething: any
  // saveSomething: any
  actions: typeof actions
  data: {
    [key: string]: any
    bookPages: {
      edges: {
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

function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(_.assign({}, actions), dispatch)
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
    request(`/api/books/58f5eb3f746f4be3a429fe8c/pages/${page}`, {
      query: {
        pageHeight: 600
      }
    }).then(data => {
      this.setState({
        pageData: data.json,
        page
      })
    })
  }

  /*render() {
    const pageData = this.state.pageData || {}
    const wrapperStyle: React.CSSProperties = {
      overflow: 'hidden',
      height: 600
    }
    const innerStyle: React.CSSProperties = {
      marginTop: (pageData['meta'] || {}).offset || 0
    }

    return (
      <div>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppFeedQuery {
              feed (type: NEW, limit: 5) {
                repository {
                  owner { login }
                  name
                  stargazers_count
                }

                postedBy { login }
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              console.log(props.feed)
              return <div>ok</div>
            }
            return <div>Loading</div>
          }}
        />*/
        /*<button onClick={() => {
          this.loadPage(this.state.page - 1)
        }}>prev</button>
        <button onClick={() => {
          this.loadPage(this.state.page + 1)
        }}>next</button>
        <div style={wrapperStyle}>
          <div style={innerStyle}>
            <Template
              htmlObjects={pageData['elements'] || []}
            />
          </div>
        </div>*/
  //     </div>
  //   )
  // }

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
      </div>
    )
  }
}

// connect(
//   mapStateToProps,
//   dispatch => ({
//     actions: bindActionCreators(actions as {}, dispatch)
//   })
//   // mapDispatchToProps
//   // { actions: _.assign({}, actions) }
// )(Next)

const query = gql`
{
	bookPages(pageHeight: 600, bookId: "58f5eb3f746f4be3a429fe8c", first: 1) {
		edges {
      cursor
      node {
        id
        meta {
          pageNo
          offset
        }
        elements {
          tag
          type
          children {
            tag
            type
            children {
              tag
              type
            }
          }
        }
      }
    }
  }
}
`

const NextWithData = graphql(query)(Next)

export default NextWithData
