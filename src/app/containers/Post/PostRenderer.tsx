import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import POST_QUERY from '../../graphql/Post.gql'

type Data = State.Apollo<{
  post: Schema.Post
}>

interface OwnProps {
  id?: string
  slug?: string
  getComponent: (data: Data) => any
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: typeof ApolloMutation
}

class PostRenderer extends Component<OwnProps & StateProps, {}> {
  render() {
    const { getComponent } = this.props
    // const _children = typeof children === 'function'
    //   ? children(this.props)
    //   : children

    return (
      <div>
        {getComponent(this.props.data)}
      </div>
    )
  }
}

export default compose(
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  ),
  graphql(POST_QUERY, {
    options: (props) => {
      return {
        variables: {
          id: props.id || null,
          slug: props.slug || null
        }
      }
    }
  }),
  withIndicator()
)(PostRenderer) as React.ComponentClass<OwnProps>
