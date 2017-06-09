import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import BookList from '../../components/BookList'
import Container from '../../components/Container'
import { Tab, Tabs } from '../../components/Tab'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import VIEWER_READING_HISTORY from '../../graphql/fragments/ViewerReadingHistory.gql'
import { graphql, compose, gql } from 'react-apollo'
import withIndicator from '../../helpers/withIndicator'
import CSSModules from 'react-css-modules'
import styles from './Shelf.scss'

type Data = State.Apollo<{
  viewer: {
    readingHistory: Schema.Connection<{
      id: string
      bookId: string
      title: string
      description: string
      percentage: number
      authors: any[]
      cover: string
    }>
  }
}>

interface IProps {
  data: Data
}

class Shelf extends Component<IProps, {}> {
  render() {
    return (
      <DocContainer title="我的书架" bodyClass="page-shelf">
        <Branding />
        <Container
          style={{
            minHeight: 400
          }}
        >
          <Tabs style={{ marginTop: 20 }}>
            <Tab title="全部">
              <BookList
                bookEntities={this.props.data.viewer.readingHistory.edges.map(edge => {
                  return {
                    ...edge.node,
                    id: edge.node.bookId
                  }
                })}
              />
            </Tab>
            <Tab title="我的上传">
              该功能仍在开发中，敬请期待！
            </Tab>
          </Tabs>
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

const withData = graphql(gql`
  query ProfileQuery {
    viewer {
      id
      readingHistory {
        ...ViewerReadingHistory
      }
    }
  }
  ${VIEWER_READING_HISTORY}
`)

export default compose(
  withData,
  withIndicator(),
  connect(
    mapStateToProps
  ),
  CSSModules(styles)
)(Shelf)
