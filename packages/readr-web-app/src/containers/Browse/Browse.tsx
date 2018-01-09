import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { graphql, compose } from 'react-apollo'
import * as selectors from '../../selectors'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './Browse.scss'
import BrandingWithImage from '../Branding/BrandingWithImage'
import Colophon from '../../components/Colophon/Colophon'
import BookListSection from '../../components/BookListSection'
import BROWSE_QUERY from './Browse.gql'
import { Tab, Tabs } from '../../components/Tab'
import BookList from '../../components/BookList/BookList'
import helpers from '../../helpers'
import Loading from '../../components/Loading/Loading'
import Button from '../../components/Button/Button'

type Data = State.Apollo<{
  slides: Schema.Connection<Schema.Slide>
  featuredBooks: Schema.Connection<Schema.Book>
  books: Schema.Connection<Schema.Book>
  categories: Schema.Connection<Schema.Category>
}>

interface Props {
  data: Data
  params: {
    category: string
  }
}

@CSSModules(styles)
class Browse extends Component<Props, void> {

  _renderCateBooks() {
    return (
      <div>
        <BookList
          bookEntities={_.map(this.props.data.books.edges, 'node')}
        />
        {
          this.props.data.books.pageInfo.hasNextPage && (
            <Button color="white" style={{ maxWidth: 200 }} isFluid onClick={this._loadMore}>更多</Button>
          )
        }
      </div>
    )
  }

  _loadMore = () => {
    const lastCursor = _.last(this.props.data.books.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.books.edges, ...fetchMoreResult.books.edges]
        const cloned = _.cloneDeep(previousResult)
        cloned.books = fetchMoreResult.books
        cloned.books.edges = edges
        return cloned
      }
    })
  }

  _renderMain() {
    const renderedBooks = this._renderCateBooks()

    return (
      <Container>
        <BookListSection
          title="精选推荐"
          bookEntities={_.map(this.props.data.featuredBooks.edges, 'node')}
          isFetching={this.props.data.loading}
        />
        <Tabs
          style={{ marginTop: 20 }}
          controlled
          active={this.props.params.category || 'all'}
          title="书籍分类"
          onTabSwitch={tabKey => {
            if (tabKey === 'all') {
              helpers.redirect(`/browse`)
            } else {
              helpers.redirect(`/browse/category/${tabKey}`)
            }
          }}
        >
          <Tab title="全部" tabKey="all">
            {renderedBooks}
          </Tab>
          {
            this.props.data.categories.edges.map(cateEdge => {
              return (
                <Tab tabKey={cateEdge.node.id} key={cateEdge.node.id} title={cateEdge.node.name}>
                  {renderedBooks}
                </Tab>
              )
            })
          }
        </Tabs>
      </Container>
    )
  }

  render() {
    const slideNode = (_.first(_.get(this, 'props.data.slides.edges', [])) || {})['node']
    const onlyImage = slideNode && {
      src: slideNode.picture,
      to: slideNode.url
    }

    return (
      <DocContainer bodyClass="page-browse" title="浏览">
        <BrandingWithImage onlyImage={onlyImage} />
        {
          this.props.data.loading && (
            <Loading />
          )
        }
        {
          this.props.data.books
            ? (
              this._renderMain()
            )
            : (
              <Loading showPlaceholder />
            )
        }
        <Colophon />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    session: selectors.session(state)
  }
}

const withData = graphql(BROWSE_QUERY, {
  options: (props) => {
    return {
      variables: {
        categories: props.params.category && [props.params.category]
      }
    }
  }
})

export default compose(
  withData,
  connect(mapStateToProps)
)(Browse)
