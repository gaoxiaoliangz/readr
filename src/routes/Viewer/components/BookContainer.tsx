import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectors from '../../../selectors'
import * as actions from '../../../actions'
import BookPages from './BookPages'
import BookRaw from './BookRaw'
import styles from './BookContainer.scss'

interface OwnProps {
}

interface StateProps {
  actions?: typeof actions
  config: Viewer.Config
  computed: TBookPage[]
  bookContent: SelectedEntity
  bookId: string
  localProgress: Viewer.LocalProgress[]
}

const mapStateToProps = state => {
  const bookId = selectors.viewer.id(state)
  const config = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const bookContent = selectors.entity('bookContents', bookId)(state)
  const localProgress = selectors.viewer.localProgress(bookId)(state)

  return {
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

  handleRawMount(wrap) {
    this.props.actions.calcBook(this.props.bookId, wrap)
  }

  render() {
    const { config: { theme, isCalcMode, isScrollMode, pageHeight }, computed, bookContent, localProgress } = this.props
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

    return (
      <div styleName={theme.toLowerCase()} style={{ height: divHeight }}>
        {
          isCalcMode
            ? (
              <BookRaw
                bookFlesh={bookFlesh}
                onRawDataMount={this.handleRawMount}
              />
            )
            : (
              <BookPages
                startPageIndex={startPageIndex}
                limit={pageLimit}
              />
            )
        }
      </div>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(BookContainer)
