import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import POST_QUERY from '../../graphql/Post.gql'
import Post from './Post'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './SitePosts.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import CSSModules from 'react-css-modules'

type Data = State.Apollo<{
  post: Schema.Post
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: typeof ApolloMutation
}

@CSSModules(styles)
class SitePostPage extends Component<OwnProps & StateProps, {}> {
  render() {
    const { data } = this.props

    return (
      <DocContainer bodyClass="page-post" title={data.post.title}>
        <Branding
          hideNav
          subTitle={(
            <Link className={styles.sub} to="/blog">
              <span>博客</span>
            </Link>
          )}
        />
        <Container maxWidth={600}>
          <Post post={data.post} titleWithLink={false} />
        </Container>
        <Colophon />
      </DocContainer>
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
          id: props.params.post
        }
      }
    }
  }),
  withIndicator()
)(SitePostPage) as React.ComponentClass<OwnProps>
