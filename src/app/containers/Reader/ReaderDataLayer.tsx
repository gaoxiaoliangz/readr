import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import ReaderComponentsLayer from './ReaderComponentsLayer/ReaderComponentsLayer'
import READER_INIT_QUERY from './ReaderInit.gql'
import BOOK_PAGES_QUERY from '../../graphql/BookPages.gql'
import UPDATE_READING_PROGRESS_MUTATION from '../../graphql/mutations/UpdateReadingProgress.gql'
import * as selectors from '../../selectors'
import withIndicator from '../../helpers/withIndicator'
import DocContainer from '../../components/DocContainer'
import routerHistory from '../../helpers/routerHistory'

const LOAD_PAGE_LIMIT = 8
const SCROLL_DELAY = 100

type Data = State.Apollo<{
  bookPages: Schema.BookPages
  error: Error
  bookInfo: Schema.Book
  loading: boolean
}>

interface StateProps {
  actions: typeof actions
  components: Viewer.Components
  data: Data
  params: any
  mutate: any
  routing: State.Routing
  localProgress: Viewer.LocalProgress[]
}

interface OwnProps {
  params: any
  fromHistory: boolean
  fromLocation: string
  config: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
  }
}

interface State {
}

class ReaderDataLayer extends Component<StateProps & OwnProps, State> {

  constructor(props) {
    super(props)
    this._handleScroll = this._handleScroll.bind(this)
    this._handleDebouncedScroll = this._handleDebouncedScroll.bind(this)
    this._handleGoToRequest = this._handleGoToRequest.bind(this)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const hasRouteChanged = !_.isEqual(this.props.routing, nextProps.routing)

    if (hasRouteChanged && nextProps.routing.hash) {
      const fromLocation = nextProps.routing.hash.substr(1)
      const { pageNo } = this._getCurrentProgress()

      this._loadPage({ fromLocation })
        .catch(err => {
          this.props.actions.sendNotification('位置未找到！', 'warning')
          setTimeout(() => {
            this._loadPage({ pageNo })
          }, 500)
        })
    }
  }

  componentDidMount() {
    // todo:
    // when percentage is changed somewhere else and current client has cache
    // then entering that book again would override the newest progress
    // perform a check first?
    let lastProgress = this.props.data.bookPages.lastProgress
    let scrollTop
    if (this.props.data.bookPages.fromLocation) {
      const startPage = this.props.data.bookPages.startPage + this.props.data.bookPages.offset - 1
      scrollTop = startPage * this.props.config.pageHeight
    } else {
      scrollTop = lastProgress * this.props.config.pageHeight * this.props.data.bookPages.totalCount
    }

    if (this.props.routing.hash) {
      routerHistory().replace(this.props.routing.pathname)
    }

    setTimeout(() => {
      document.body.scrollTop = scrollTop
      this._updateLocalProgress()
    }, SCROLL_DELAY)
  }

  _handleGoToRequest(percentage) {
    document.body.scrollTop = percentage * this.props.config.pageHeight * this.props.data.bookPages.totalCount
  }

  _loadPage(config: { pageNo?, first?, fromLocation?} = {}) {
    const { first, fromLocation, pageNo } = config
    const offset = pageNo ? pageNo - 1 : 0
    const { data: { fetchMore } } = this.props
    return fetchMore({
      query: BOOK_PAGES_QUERY,
      variables: {
        ...this.props.config,
        bookId: this.props.params.id,
        offset,
        first: first || LOAD_PAGE_LIMIT,
        fromHistory: false,
        fromLocation: fromLocation || null
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        let edges = [...previousResult.bookPages.edges, ...fetchMoreResult.bookPages.edges]
        edges = _.unionBy(edges, node => {
          return node.cursor
        })
        edges = edges.sort((a, b) => a.node.pageNo - b.node.pageNo)

        const merged = {
          ...previousResult,
          bookPages: {
            ...fetchMoreResult.bookPages,
            edges
          }
        }

        return merged
      }
    })
  }

  _updateLocalProgress() {
    const { pageNo, totalCount, percentage } = this._getCurrentProgress()
    this.props.actions.viewer.updateLocalProgress(this.props.params.id, {
      page: pageNo,
      pageCount: totalCount,
      percentage
    })
  }

  _handleScroll(direction) {
    const { components: { showPreference, showPanel } } = this.props
    const reachingPageTop = document.body.scrollTop < this.props.config.pageHeight

    if ((direction === 'up' && showPanel === false) || reachingPageTop) {
      this.props.actions.viewer.toggleViewerPanel(true)
    }
    // if direction is undefined, it's probably that it's performing an in-book navigation
    if ((direction === 'down' && !showPreference && showPanel === true && !reachingPageTop) || !direction) {
      this.props.actions.viewer.toggleViewerPanel(false)
    }
  }

  _handleDebouncedScroll(e, direction) {
    this._updateLocalProgress()
    this._checkToLoadPage()
    const { percentage } = this._getCurrentProgress()

    this.props.mutate({
      variables: {
        percentage,
        bookId: this.props.params.id
      }
    })
  }

  _getCurrentProgress() {
    const scrollTop = document.body.scrollTop
    const {
      config: { pageHeight },
      data: { bookPages: { totalCount } }
    } = this.props

    const currentPageIndex = Math.floor(scrollTop / pageHeight)
    const pageNo = currentPageIndex + 1
    const percentage = scrollTop / (this.props.data.bookPages.totalCount * pageHeight)
    return { pageNo, totalCount, percentage }
  }

  _checkToLoadPage() {
    const {
      data: { bookPages: { edges } }
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
        const _pageNo = edge.node.pageNo
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
    const { data: { bookInfo, bookPages }, config } = this.props

    return (
      <DocContainer bodyClass="page-reader-v2" title={bookInfo.title}>
        <ReaderComponentsLayer
          bookPages={bookPages}
          bookInfo={bookInfo}
          onReachBottom={() => {
          }}
          onDebuncedScroll={this._handleDebouncedScroll}
          onScroll={this._handleScroll}
          renderConfig={config}
          onGoToRequest={this._handleGoToRequest}
        />
      </DocContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  const id = selectors.viewer.id(state)
  const localProgress = selectors.viewer.localProgress(id)(state)
  return {
    components,
    routing: selectors.routing(state),
    localProgress
  }
}

export default compose<{}, {}, {}, {}, React.ComponentClass<OwnProps>>(
  graphql(UPDATE_READING_PROGRESS_MUTATION),
  graphql(READER_INIT_QUERY, {
    options: (props: OwnProps) => {
      const { config: { pageHeight, fontSize, lineHeight, width }, fromHistory, fromLocation } = props

      return {
        variables: {
          bookId: props.params.id,
          first: 5,
          pageHeight,
          fontSize,
          lineHeight,
          width,
          fromHistory,
          fromLocation
        }
      }
    }
  }),
  withIndicator(),
  connect(
    mapStateToProps,
    dispatch => ({
      actions: {
        ...bindActionCreators(actions as {}, dispatch),
        viewer: bindActionCreators(actions.viewer as {}, dispatch)
      }
    })
  )
)(ReaderDataLayer)
