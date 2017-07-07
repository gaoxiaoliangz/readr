import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './SitePosts.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import CSSModules from 'react-css-modules'
import POSTS_QUERY from './Posts.gql'
import Post from './Post'

type Data = State.Apollo<{
  posts: Schema.Connection<Schema.Post>
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
}

@CSSModules(styles)
class SitePostList extends Component<OwnProps & StateProps, {}> {
  render() {
    const { data } = this.props

    return (
      <DocContainer bodyClass="page-posts" title="博客">
        <Branding
          hideNav
          subTitle={(
            <Link className={styles.sub} to="/blog">
              <span>博客</span>
            </Link>
          )}
        />
        <Container maxWidth={600}>
          <div styleName="posts">
            {
              data.posts.edges.map((edge) => {
                const post = edge.node

                return (
                  <Post titleWithLink useDigest post={post} key={edge.node.id} />
                )
              })
            }
          </div>
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
  graphql(POSTS_QUERY, {
    // options: (props) => {
    //   return {
    //     variables: {
    //       slug: props.params.slug || null
    //     }
    //   }
    // }
  }),
  withIndicator()
)(SitePostList) as React.ComponentClass<OwnProps>
