import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2Container from './Viewer2Container'
import viewerQuery from './viewerQuery'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading'

const BOOK_ID = '58f5eb3f746f4be3a429fe8c'

interface AllProps {
  actions: typeof actions
  routing: any
  components: Viewer.Components
  data: {
    bookPages: QBookPages
    [key: string]: any
    fetchMore: any
  }
}

class Viewer2 extends Component<AllProps, void> {
  constructor(props) {
    super(props)
    this.handleLoadPage = this.handleLoadPage.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleLoadPage(direction: 'prev' | 'next' = 'next') {
    const { data: { fetchMore } } = this.props
    const fistItemCursor = _.first(this.props.data.bookPages.edges).cursor
    const lastItemCursor = _.last(this.props.data.bookPages.edges).cursor

    fetchMore({
      variables: {
        bookId: BOOK_ID,
        before: direction === 'prev' && fistItemCursor,
        after: direction === 'next' && lastItemCursor,
        first: direction === 'next' ? 1 : null,
        last: direction === 'prev' ? 1 : null
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        let edges = direction === 'next'
          ? [...previousResult.bookPages.edges, ...fetchMoreResult.bookPages.edges]
          : [...fetchMoreResult.bookPages.edges, ...previousResult.bookPages.edges]

        const merged = Object.assign({}, previousResult, {
          bookPages: {
            edges
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
        <Loading/>
      )
    }

    return (
      <Viewer2Container
        bookPages={this.props.data.bookPages}
        onLoadPage={this.handleLoadPage}
        onReachBottom={this.handleLoadPage}
        onDebuncedScroll={(direction) => {
        }}
        onScroll={this.handleScroll}
      />
    )
  }
}

const Viewer2WithData = graphql(
  gql`${viewerQuery}`,
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
