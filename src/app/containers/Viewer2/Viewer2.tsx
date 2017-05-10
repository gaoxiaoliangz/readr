import _ from 'lodash'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2Container from './Viewer2Container'
import viewerQuery from './viewer2Query.gql'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading'
import DocContainer from '../../components/DocContainer'

const BOOK_ID = '58f5eb3f746f4be3a429fe8c'

type Data = {
  viewer: {
    bookPages: QBookPages
  }
  bookInfo: QBookInfo
  fetchMore: any
  loading: boolean
}

interface AllProps {
  actions: typeof actions
  routing: any
  components: Viewer.Components
  data: Data
}

class Viewer2 extends Component<AllProps, void> {
  constructor(props) {
    super(props)
    this.handleLoadPage = this.handleLoadPage.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleLoadPage(direction: 'prev' | 'next' = 'next') {
    const { data: { fetchMore } } = this.props
    const fistItemCursor = _.first(this.props.data.viewer.bookPages.edges).cursor
    const lastItemCursor = _.last(this.props.data.viewer.bookPages.edges).cursor

    fetchMore({
      variables: {
        bookId: BOOK_ID,
        before: direction === 'prev' && fistItemCursor,
        after: direction === 'next' && lastItemCursor,
        first: direction === 'next' ? 1 : null,
        last: direction === 'prev' ? 1 : null
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        let edges = direction === 'next'
          ? [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]
          : [...fetchMoreResult.viewer.bookPages.edges, ...previousResult.viewer.bookPages.edges]

        const merged = Object.assign({}, previousResult, {
          viewer: {
            bookPages: {
              edges
            }
          }
        })

        return merged
      }
    })
  }

  handleScroll(direction) {
    const { components: { showPreference } } = this.props
    if (direction === 'up') {
      this.props.actions.viewer.toggleViewerPanel(true)
    } else {
      if (!showPreference) {
        this.props.actions.viewer.toggleViewerPanel(false)
      }
    }
  }

  render() {
    if (this.props.data.loading) {
      return (
        <Loading />
      )
    }

    return (
      <DocContainer bodyClass="page-viewer-v2">
        <Viewer2Container
          bookPages={this.props.data.viewer.bookPages}
          bookInfo={this.props.data.bookInfo}
          onLoadPage={this.handleLoadPage}
          onReachBottom={this.handleLoadPage}
          onDebuncedScroll={(direction) => {
          }}
          onScroll={this.handleScroll}
        />
      </DocContainer>
    )
  }
}

const Viewer2WithData = graphql(
  viewerQuery,
  {
    options: () => {
      return {
        variables: {
          bookId: BOOK_ID,
          first: 1,
          after: 'YXJyYXljb25uZWN0aW9uOjE1'
        }
      }
    }
  }
)(Viewer2)

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  return {
    components
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(Viewer2WithData)
