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
import withIndicator from '../../helpers/withIndicator'
import { Tab, Tabs } from '../../components/Tab'
import BookList from '../../components/BookList/BookList'
import helpers from '../../helpers'

interface Props {
  data: State.Apollo<{
    slides: Schema.Connection<Schema.Slide>
    featuredBooks: Schema.Connection<Schema.Book>
    books: Schema.Connection<Schema.Book>
    categories: Schema.Connection<Schema.Category>
  }>
  params: {
    category: string
  }
}

@CSSModules(styles)
class Browse extends Component<Props, void> {

  renderCateBooks() {
    return (
      <BookList
        bookEntities={_.map(this.props.data.books.edges, 'node')}
      />
    )
  }

  render() {
    const slideNode = (_.first(this.props.data.slides.edges) || {})['node']
    const onlyImage = slideNode && {
      src: slideNode.picture,
      to: slideNode.url
    }
    const renderedBooks = this.renderCateBooks()

    return (
      <DocContainer bodyClass="page-browse" title="浏览">
        <BrandingWithImage onlyImage={onlyImage} />
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
  withIndicator(),
  connect(mapStateToProps)
)(Browse)
