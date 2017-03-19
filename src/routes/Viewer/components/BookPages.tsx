import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../actions'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import * as selectors from '../../../selectors'
import _ from 'lodash'
const styles = require('./BookPages.scss')

interface OwnProps {
  startPageIndex?: number
  limit?: number

  // will override computed
  // used in BookRaw for caculation
  pages?: TBookPage[]
}

interface StateProps {
  sendNotification: typeof sendNotification
  computed: TBookPage[]
  bookId: string
  config: Viewer.Config
  // currentPageNo?: number
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const computed = selectors.viewer.computed(bookId)(state)
  // const currentPageNo = selectors.viewer.progress(bookId)(state).pageNo

  return { config, bookId, computed }
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookPages extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  render() {
    const { pages, computed, startPageIndex, limit, config: { theme, isScrollMode, pageHeight, isCalcMode, fluid } } = this.props
    const totalHeight = computed.length * pageHeight
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid,
      [theme && theme.toLocaleLowerCase()]: Boolean(theme)
    })

    const ulHeight = isCalcMode
      ? 'auto'
      : (
        isScrollMode
          ? totalHeight
          : pageHeight
      )

    const ulStyle = { height: ulHeight }
    let pagesToRender

    if (pages && pages.length !== 0) {
      pagesToRender = pages
    }

    if (computed && computed.length !== 0) {
      pagesToRender = computed.slice(startPageIndex, startPageIndex + limit)
    }

    return (
      <ul styleName={className} style={ulStyle}>
        {
          pagesToRender.map((page, index) => {
            // const active = page.meta && page.meta.pageNo === currentPageNo
            const active = false

            return (
              <BookPage
                fluid={fluid}
                page={page}
                pageHeight={pageHeight}
                key={index}
                active={active}
              />
            )
          })
        }
      </ul>
    )
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  { sendNotification }
)(BookPages)
