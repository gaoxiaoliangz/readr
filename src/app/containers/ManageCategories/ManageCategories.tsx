import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../selectors'
import { sendNotification, openConfirmModal, closeConfirmModal, openModal, closeModal } from '../../actions'
import { graphql, compose } from 'react-apollo'
import moment from 'moment'
import { Button } from '../../components/form'
import CategoryForm from './components/CategoryForm'
import Loading from '../../components/Loading'
import MANAGE_BOOKS_QUERY from './ManageCategories.gql'
// import UPDATE_CATEGORY from '../../graphql/mutations/UpdateBook.gql'
// import DEL_CATEGORY from '../../graphql/mutations/DelBook.gql'

type Data = State.Apollo<{
  categories: Schema.Connection<Schema.Category>
}>

interface Props {
  data: Data
  sendNotification?: typeof sendNotification
  openConfirmModal: typeof openConfirmModal
  routing: State.Routing
  openModal: typeof openModal
  closeModal: typeof closeModal
  updateCategory: typeof ApolloMutation
  delCategory: typeof ApolloMutation
}

class ManageCategories extends Component<Props, void> {
  _del(row: Schema.Category) {
    this.props.openConfirmModal({
      title: '确认删除',
      content: `将删除${row.name}`,
      onConfirm: (close) => {
        this.props.delCategory({
          variables: {
            id: row.id
          }
        })
          .then(res => {
            close()
            this.props.sendNotification('删除成功！')
            this.props.data.refetch()
          })
          .catch(err => {
            close()
            this.props.sendNotification(err.message, 'error')
          })
      }
    })
  }

  _edit(itemData, isEdit: boolean) {
    this.props.openModal({
      title: `${isEdit ? '编辑分类' : '新增分类'}`,
      content: (
        <CategoryForm
          closeModal={this.props.closeModal}
          initialValues={itemData || {}}
          onSubmit={data => {
            this.props.updateCategory({
              variables: {
                ...data,
                id: isEdit && itemData.id
              }
            })
              .then(() => {
                this.props.sendNotification('更新成功！')
                this.props.closeModal()
                this.props.data.refetch()
              })
              .catch((err) => {
                this.props.closeModal()
                this.props.sendNotification(err.message, 'error')
              })
          }}
        />
      )
    })
  }

  _loadMore() {
    const lastCursor = _.last(this.props.data.categories.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor,
        first: 10
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.categories.edges, ...fetchMoreResult.categories.edges]
        return _.merge({}, fetchMoreResult, {
          posts: {
            edges
          }
        })
      }
    })
  }

  render() {
    if (this.props.data.loading) {
      return <Loading center useNProgress />
    }

    const entities = this.props.data.categories.edges.map(edge => edge.node)
    const rows = entities
      .map((row, index) => {
        return [
          row.name,
          row.slug,
          moment(new Date(row.createdAt).valueOf()).format('YYYY年MM月DD日'),
          row.description,
          (
            <div>
              <span className="dark-link" onClick={() => {
                this._edit(row, true)
              }}>编辑</span>
              <span className="dark-link" onClick={() => {
                this._del(row)
              }}>删除</span>
            </div>
          )
        ]
      })

    return (
      <DocContainer title="分类管理" bodyClass="manage-categories">
        <Button color="blue" onClick={() => {this._edit(null, false)}}>添加分类</Button>
        <InfoTable
          rows={rows}
          header={['名称', '路径', '创建日期', '描述', '操作']}
        />
        {
          this.props.data.categories.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this._loadMore() }}
              width={200}
              color="blue"
            >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
          )
        }
      </DocContainer>
    )
  }
}

const withData = graphql(MANAGE_BOOKS_QUERY, {
  options: props => {
    return {
      variables: {
        first: 10
      }
    }
  }
})

function mapStateToProps(state, ownProps) {
  return {
    routing: selectors.routing(state)
  }
}

export default compose(
  connect(
    mapStateToProps,
    { sendNotification, openConfirmModal, closeConfirmModal, openModal, closeModal }
  ),
  withData,
  // graphql(UPDATE_CATEGORY, {
  //   name: 'updateCategory'
  // }),
  // graphql(DEL_CATEGORY, {
  //   name: 'delCategory'
  // })
)(ManageCategories)
