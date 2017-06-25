import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import _ from 'lodash'
import moment from 'moment'
import CSSModules from 'react-css-modules'
import { sendNotification } from '../../actions'
import POSTS_QUERY from '../../graphql/Posts.gql'
import withIndicator from '../../helpers/withIndicator'
import InfoTable from '../../components/InfoTable'
import Button from '../../components/Button/Button'
import { filterPostStatus, filterPostVisilibity, filterPostCategory } from './ManagePostsDuck'
import Select from '../../components/Select/Select'
import { POST_STATUS, POST_VISIBILITY, POST_CATEGORY } from '../../constants'
import styles from './ManagePosts.scss'

const mapOptions = val => {
  return {
    name: val,
    value: val
  }
}

const postStatusOptions = _.map(POST_STATUS, mapOptions)
const postVisibilityOptions = _.map(POST_VISIBILITY, mapOptions)
const postCategoryOptions = _.map(POST_CATEGORY, mapOptions)

type Data = State.Apollo<{
  posts: Schema.Connection<{
    slug: string
    title: string
    description: string
    author: string
    tags: {
      id: string
      name: string
      slug: string
    }[]
    markdown: string
    visibility: PostVisibility // keyof PostVisibility
    status: PostStatus // keyof PostStatus
    category: PostCategory // keyof PostCategories
    image: string
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
  }>
}>

interface OwnProps {
}

interface State {
}

interface StateProps {
  sendNotification: typeof sendNotification
  filterPostStatus: typeof filterPostStatus
  filterPostVisilibity: typeof filterPostVisilibity
  filterPostCategory: typeof filterPostCategory
  data: Data
  managePosts: {
    postStatus: PostStatus
    postVisilibity: PostVisibility
    postCategory: PostCategory
  }
}

class ManagePosts extends Component<OwnProps & StateProps, State> {

  constructor(props) {
    super(props)
    this._handleStatusChange = this._handleStatusChange.bind(this)
    this._handleVisibilityChange = this._handleVisibilityChange.bind(this)
    this._handleCategoryChange = this._handleCategoryChange.bind(this)
  }

  _handleStatusChange(e) {
    this.props.filterPostStatus(e.target.value || null)
  }

  _handleVisibilityChange(e) {
    this.props.filterPostVisilibity(e.target.value || null)
  }

  _handleCategoryChange(e) {
    this.props.filterPostCategory(e.target.value || null)
  }

  _loadMore() {
    const lastCursor = _.last(this.props.data.posts.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor
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
    const { managePosts: { postStatus, postVisilibity, postCategory } } = this.props
    const rows = this.props.data.posts.edges.map((edge, index) => {
      const { node } = edge
      return [
        node.title,
        node.category,
        node.slug,
        node.status,
        node.visibility,
        moment(new Date(node.createdAt).valueOf()).format('YYYY年MM月DD日')
      ]
    })

    return (
      <div>
        <div styleName="query-section">
          <Select
            value={postStatus}
            options={postStatusOptions}
            onChange={this._handleStatusChange}
          />
          <Select
            value={postVisilibity}
            options={postVisibilityOptions}
            onChange={this._handleVisibilityChange}
          />
          <Select
            value={postCategory}
            options={postCategoryOptions}
            onChange={this._handleCategoryChange}
          />
        </div>
        <InfoTable
          header={['标题', '分类', '路径', '状态', '可见性', '创建时间']}
          rows={rows}
        />
        {
          this.props.data.posts.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this._loadMore() }}
              width={200}
              color="blue"
            >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
          )
        }
      </div>
    )
  }
}

const withData = graphql(POSTS_QUERY, {
  options: (props: OwnProps & StateProps) => {
    return {
      variables: {
        first: 5,
        status: props.managePosts.postStatus,
        visibility: props.managePosts.postVisilibity,
        category: props.managePosts.postCategory
      }
    }
  }
})

const withState = connect(
  (state: StateProps, ownProps) => {
    return {
      managePosts: state.managePosts
    }
  },
  { sendNotification, filterPostStatus, filterPostVisilibity, filterPostCategory }
)

export default compose<{}, {}, {}, OwnProps>(
  withState,
  withData,
  withIndicator(),
  CSSModules(styles)
)(ManagePosts)
