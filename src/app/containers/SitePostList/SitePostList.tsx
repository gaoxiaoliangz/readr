import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import DocContainer from '../../components/DocContainer'
import Button from '../../components/Button/Button'
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

  _loadMore() {
    const lastCursor = _.last(this.props.data.posts.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor,
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.posts.edges, ...fetchMoreResult.posts.edges]
        return _.merge({}, fetchMoreResult, {
          posts: {
            edges
          }
        })
      }
    })
  }

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
        <Container maxWidth={700}>
          <div styleName="posts">
            {
              data.posts.edges.map((edge) => {
                const post = edge.node

                return (
                  <Post titleWithLink useDigest post={post} key={edge.node.id} />
                )
              })
            }
            {
              this.props.data.posts.pageInfo.hasNextPage && (
                <Button
                  onClick={() => { this._loadMore() }}
                  color="white"
                  isFluid
                >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
              )
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
    options: (props) => {
      return {
        variables: {
          first: 5
        }
      }
    }
  }),
  withIndicator()
)(SitePostList) as React.ComponentClass<OwnProps>
