import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../store/actions'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import * as selectors from '../../../store/selectors'
const styles = require('./BookPages.scss')

interface Props {
  pages: TBookPage[]
  pageHeight?: number
  fluid?: boolean
  totalHeight?: number
}

interface AllProps extends Props {
  sendNotification?: typeof sendNotification
  theme?: string
}

const mapStateToProps = (state, ownProps) => {
  const { theme } = selectors.viewer.config(state)

  return { theme }
}

@connect<AllProps>(
  mapStateToProps,
  { sendNotification }
)
@CSSModules(styles, {
  allowMultiple: true
})
export default class BookPages extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const { pages, fluid, pageHeight, totalHeight, theme } = this.props
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid,
      [theme && theme.toLocaleLowerCase()]: Boolean(theme)
    })

    return (
      <ul styleName={className} style={{height: totalHeight || 'auto'}}>
        {
          pages.map((page, index) => {
            return (
              <BookPage
                fluid={fluid}
                page={page}
                pageHeight={pageHeight}
                key={index}
                />
            )
          })
        }
      </ul>
    )
  }
}
