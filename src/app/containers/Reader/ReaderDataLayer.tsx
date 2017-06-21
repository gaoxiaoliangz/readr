import _ from 'lodash'
import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import ReaderComponentsLayer from './ReaderComponentsLayer/ReaderComponentsLayer'
import READER_INIT_QUERY from '../../graphql/ReaderInit.gql'
import BOOK_PAGES_QUERY from '../../graphql/BookPages.gql'
import UPDATE_READING_PROGRESS_MUTATION from '../../graphql/mutations/UpdateReadingProgress.gql'
import * as selectors from '../../selectors'
import withIndicator from '../../helpers/withIndicator'
import DocContainer from '../../components/DocContainer'
import routerHistory from '../../helpers/routerHistory'

const LOAD_PAGE_LIMIT = 8
const SCROLL_DELAY = 100

type Data = State.Apollo<{
  viewer: {
    bookPages: Schema.BookPages
  }
  error: Error
  bookInfo: Schema.BookInfo
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
    this.state = {
      isInitialRender: true
    }
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
    let startPage
    if (!this.props.routing.hash) {
      startPage = (((_.last(this.props.localProgress) || {})['page']) || this.props.data.viewer.bookPages.startPage) - 1
    } else {
      startPage = this.props.data.viewer.bookPages.startPage + this.props.data.viewer.bookPages.offset - 1
      routerHistory().replace(this.props.routing.pathname)
    }

    const scrollTop = startPage * this.props.config.pageHeight

    setTimeout(() => {
      document.body.scrollTop = scrollTop
      this.setState({
        isInitialRender: false
      })
    }, SCROLL_DELAY)
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
        let edges = [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]
        edges = _.unionBy(edges, node => {
          return node.cursor
        })
        edges = edges.sort((a, b) => a.node.meta.pageNo - b.node.meta.pageNo)

        const merged = {
          ...previousResult,
          viewer: {
            ...previousResult.viewer,
            bookPages: {
              ...previousResult.viewer.bookPages,
              edges,
              startPage: fetchMoreResult.viewer.bookPages.startPage,
              offset: fetchMoreResult.viewer.bookPages.offset
            }
          }
        }

        return merged
      }
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

    const { pageNo, totalCount } = this._getCurrentProgress()
    this.props.actions.viewer.updateLocalProgress(this.props.params.id, {
      page: pageNo,
      pageCount: totalCount,
      percentage: pageNo / totalCount
    })
  }

  _handleDebouncedScroll(e, direction) {
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
    const { data: { bookInfo, viewer }, config } = this.props

    return (
      <DocContainer bodyClass="page-reader-v2">
        <ReaderComponentsLayer
          bookPages={viewer.bookPages}
          bookInfo={bookInfo}
          onReachBottom={() => {
          }}
          onDebuncedScroll={this._handleDebouncedScroll}
          onScroll={this._handleScroll}
          renderConfig={config}
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
