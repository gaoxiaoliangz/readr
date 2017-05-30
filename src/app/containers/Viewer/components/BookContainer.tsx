import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectors from '../../../selectors'
import { viewer as viewerActions } from '../../../actions'
import BookPages from './BookPages'
import BookRaw from './BookRaw'
import Loading from '../../../components/Loading'
import styles from './BookContainer.scss'
import schemas from '../../../schemas'

interface OwnProps {
}

interface StateProps {
  viewerActions?: typeof viewerActions
  status: Viewer.Status
  config: Viewer.Config
  computed: TBookPage[]
  bookContent: State.Entity
  bookId: string
  localProgress: Viewer.LocalProgress[]
}

const mapStateToProps = state => {
  const bookId = selectors.viewer.id(state)
  const config = selectors.viewer.config(state)
  const status = selectors.viewer.status(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const bookContent = selectors.entity(schemas.BOOK_CONTENT, bookId)(state)
  const localProgress = selectors.viewer.localProgress(bookId)(state)

  return {
    status,
    config,
    computed,
    bookContent,
    bookId,
    localProgress
  }
}

@CSSModules(styles)
class BookContainer extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
    this.handleRawMount = this.handleRawMount.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  handleRawMount(wrap) {
    this.props.viewerActions.calcBook(this.props.bookId, wrap)
  }

  render() {
    const {
      config: { theme, isCalcMode, isScrollMode, pageHeight },
      status: { isReady, statusText },
      computed,
      bookContent,
      localProgress,
      bookId
    } = this.props
    const { flesh: bookFlesh } = bookContent

    const pageNo = _.get(_.last(localProgress), 'page', 1)
    const pageLimit = 5
    let startPageIndex
    startPageIndex = pageNo - Math.ceil(pageLimit / 2)
    startPageIndex = startPageIndex < 0 ? 0 : startPageIndex

    const divHeight = isCalcMode
      ? 'auto'
      : (
        isScrollMode
          ? computed.length * pageHeight
          : pageHeight
      )

    // todo: use viewer status
    return bookId && (
      <div className="book-container" styleName={theme.toLowerCase()} style={{ height: divHeight }}>
        {
          !isReady && (
            <Loading
              center
              text={statusText}
            />
          )
        }
        {
          isCalcMode && (
            <BookRaw
              bookFlesh={bookFlesh}
              onRawDataMount={this.handleRawMount}
            />
          )
        }
        {
          !_.isEmpty(computed) && (
            <BookPages
              startPageIndex={startPageIndex}
              limit={pageLimit}
              pages={computed}
            />
          )
        }
      </div >
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    viewerActions: bindActionCreators(viewerActions as {}, dispatch)
  })
)(BookContainer)
