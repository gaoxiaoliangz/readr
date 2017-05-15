import _ from 'lodash'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2Container from './Viewer2Container/Viewer2Container'
import viewerQuery from './viewer2Query.gql'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading'
import DocContainer from '../../components/DocContainer'

type Data = {
  viewer: {
    bookPages: Schema.BookPages
    readingProgress: Schema.ReadingProgress
  }
  error: Error
  bookInfo: Schema.BookInfo
  fetchMore: any
  loading: boolean
}

interface StateProps {
  actions: typeof actions
  routing: any
  components: Viewer.Components
  data: Data
}

interface OwnProps {
  params: any
  fromHistory: boolean
  config: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
  }
}

interface State {
  isInitialRender: boolean
}

const LOAD_PAGE_LIMIT = 8

class Viewer2WithData extends Component<StateProps & OwnProps, State> {

  constructor(props) {
    super(props)
    // this.handleLoadPage = this.handleLoadPage.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleDebouncedScroll = this.handleDebouncedScroll.bind(this)
    this.state = {
      isInitialRender: true
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    const isPagesLoaded = this.props.data.loading && !nextProps.data.loading && !nextProps.data.error

    if (isPagesLoaded && this.state.isInitialRender) {
      this.setState({
        isInitialRender: false
      })
      const scrollTop = nextProps.data.viewer.bookPages.edges[0].node.meta.pageNo * this.props.config.pageHeight
      setTimeout(function() {
        document.body.scrollTop = scrollTop
      }, 500)
    }
  }

  // handleLoadPage(direction: 'prev' | 'next' = 'next') {
  //   const { data: { fetchMore } } = this.props
  //   const fistItemCursor = _.first(this.props.data.viewer.bookPages.edges).cursor
  //   const lastItemCursor = _.last(this.props.data.viewer.bookPages.edges).cursor

  //   fetchMore({
  //     variables: {
  //       before: direction === 'prev' && fistItemCursor,
  //       after: direction === 'next' && lastItemCursor,
  //       first: direction === 'next' ? 1 : null,
  //       last: direction === 'prev' ? 1 : null,
  //       fromHistory: false
  //     },
  //     updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
  //       let edges = direction === 'next'
  //         ? [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]
  //         : [...fetchMoreResult.viewer.bookPages.edges, ...previousResult.viewer.bookPages.edges]

  //       const merged = Object.assign({}, previousResult, {
  //         viewer: {
  //           bookPages: {
  //             edges
  //           }
  //         }
  //       })

  //       return merged
  //     }
  //   })
  // }

  _loadPage(pageNo, first = LOAD_PAGE_LIMIT) {
    const offset = pageNo - 1
    const { data: { fetchMore } } = this.props
    fetchMore({
      variables: {
        offset,
        first,
        fromHistory: false
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]

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
    const { components: { showPreference, showPanel } } = this.props
    if (direction === 'up' && showPanel === false) {
      this.props.actions.viewer.toggleViewerPanel(true)
    }
    if (direction === 'down' && !showPreference && showPanel === true) {
      this.props.actions.viewer.toggleViewerPanel(false)
    }
    const { pageNo, totalCount } = this._getCurrentProgress()
    this.props.actions.viewer.updateLocalProgress(this.props.params.id, {
      page: pageNo,
      pageCount: totalCount,
      percentage: pageNo / totalCount
    })
  }

  handleDebouncedScroll(e, direction) {
    this._checkToLoadPage()
  }

  _getCurrentProgress() {
    const scrollTop = document.body.scrollTop
    const {
      config: { pageHeight },
      data: { viewer: { bookPages: { totalCount } } }
    } = this.props

    const currentPageIndex = Math.floor(scrollTop / pageHeight)
    const pageNo = currentPageIndex + 1
    return { pageNo, totalCount }
  }

  _checkToLoadPage() {
    const {
      data: { viewer: { bookPages: { edges } } }
    } = this.props

    const { pageNo } = this._getCurrentProgress()

    const getRange = (c: number) => {
      // [c-1, c, c+1, c+2] c for the current reading page
      // the first index of found missing
      return _.times(4, n => {
        return c + n - 1
      })
    }

    let missings = getRange(pageNo)
    let range = missings
    const getStartPos = () => {
      _.forEach(edges, edge => {
        const _pageNo = edge.node.meta.pageNo
        const foundIndex = missings.indexOf(_pageNo)
        if (foundIndex !== -1) {
          missings = missings.filter((m, index) => {
            return index !== foundIndex
          })
        }
      })

      if (missings.length === 0) {
        return null
      }
      return missings[0]
    }
    const startPos = getStartPos()

    if (startPos) {
      this._loadPage(startPos, LOAD_PAGE_LIMIT - (startPos - range[0]))
    }
  }

  render() {
    const { data: { loading, error, bookInfo, viewer }, config } = this.props
    const hasDataMounted = _.get(viewer, 'bookPages.edges', []).length !== 0

    if (error) {
      return (
        <div>{error.message}</div>
      )
    }

    if (!hasDataMounted) {
      return (
        <Loading useNProgress />
      )
    }

    return (
      <DocContainer bodyClass="page-viewer-v2">
        {
          loading && (
            <Loading useNProgress />
          )
        }
        <Viewer2Container
          bookPages={viewer.bookPages}
          bookInfo={bookInfo}
          onReachBottom={() => {

          }}
          onDebuncedScroll={this.handleDebouncedScroll}
          onScroll={this.handleScroll}
          renderConfig={config}
        />
      </DocContainer>
    )
  }
}

const _Viewer2WithData = graphql(
  viewerQuery,
  {
    options: (props: OwnProps) => {
      const { config: { pageHeight, fontSize, lineHeight, width }, fromHistory } = props

      return {
        variables: {
          bookId: props.params.id,
          first: 5,
          pageHeight,
          fontSize,
          lineHeight,
          width,
          fromHistory
        }
      }
    }
  }
)(Viewer2WithData)

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  return {
    components
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(_Viewer2WithData)
