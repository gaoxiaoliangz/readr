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
  pages: TBookPage[]
}

interface StateProps {
  sendNotification?: typeof sendNotification
  theme?: string
  isScrollMode?: boolean
  isCalcMode?: boolean
  pageHeight?: number
  fluid?: boolean
  computed?: TBookPage[]
  currentPageNo?: number
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(config.bookId)(state)
  const currentPageNo = selectors.viewer.progress(config.bookId)(state).pageNo

  return _.assign({}, config, { computed, currentPageNo })
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookPages extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
  }

  // 写成 decorator 的形式？
  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  render() {
    const { pages, fluid, computed, theme, isScrollMode, pageHeight, isCalcMode, currentPageNo } = this.props
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

    return (
      <ul styleName={className} style={ulStyle}>
        {
          pages.map((page, index) => {
            const active = page.meta && page.meta.pageNo === currentPageNo

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

export default connect<StateProps, {}, OwnProps>(
  mapStateToProps,
  { sendNotification }
)(BookPages)
