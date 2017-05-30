import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2Container from './Viewer2Container/Viewer2Container'
import viewerQuery from './viewer2Query.gql'
import updateReadingProgressMutation from './updateReadingProgress.gql'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading'
import DocContainer from '../../components/DocContainer'

const LOAD_PAGE_LIMIT = 8

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
  components: Viewer.Components
  data: Data
  params: any
  mutate: any
  routing: State.Routing
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

class Viewer2WithData extends Component<StateProps & OwnProps, State> {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleDebouncedScroll = this.handleDebouncedScroll.bind(this)
    this.state = {
      isInitialRender: true
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    const isPagesLoaded = this.props.data.loading && !nextProps.data.loading && !nextProps.data.error
    const hasRouteChanged = !_.isEqual(this.props.routing, nextProps.routing)

    if (isPagesLoaded && this.state.isInitialRender) {
      this.setState({
        isInitialRender: false
      })
      const scrollTop = (nextProps.data.viewer.bookPages.startPage - 1) * this.props.config.pageHeight
      setTimeout(function () {
        document.body.scrollTop = scrollTop
      }, 500)
    }

    if (hasRouteChanged && !this.state.isInitialRender) {
      const fromLocation = nextProps.routing.hash.substr(1)
      this._loadPage({
        fromLocation
      })
      this.setState({
        isInitialRender: true
      })
    }
  }

  _loadPage(config: { pageNo?, first?, fromLocation? }) {
    const { first, fromLocation, pageNo } = config
    const offset = pageNo ? pageNo - 1 : 0
    const { data: { fetchMore } } = this.props
    fetchMore({
      variables: {
        offset,
        first: first || LOAD_PAGE_LIMIT,
        fromHistory: false,
        fromLocation: fromLocation || null
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        let edges = [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]
        edges = _.unionBy(edges, node => {
          return node.cursor
        })
        edges = edges.sort((a, b) => a.node.meta.pageNo - b.node.meta.pageNo)

        const merged = _.merge({}, fetchMoreResult, {
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
    const { pageNo, totalCount } = this._getCurrentProgress()
    this.props.mutate({
      variables: {
        percentage: pageNo / totalCount,
        bookId: this.props.params.id
      }
    })
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
      this._loadPage({
        pageNo: startPos,
        first: LOAD_PAGE_LIMIT - (startPos - range[0])
      })
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

const _Viewer2WithData = compose(
  graphql(updateReadingProgressMutation),
  graphql(viewerQuery, {
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
  })
)(Viewer2WithData)

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  return {
    components,
    routing: selectors.routing(state)
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(_Viewer2WithData as any)
