import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import DocContainer from '../../components/DocContainer'
import * as selectors from '../../selectors'
import { initializeViewer, destroy } from '../../actions/viewer'
import VContainer from './components/VContainer'
import styles from './ReaderL.scss'
import schemas from '../../schemas'

interface AllProps {
  book: {
    title: string
  }
  initializeViewer: typeof initializeViewer
  destroy: typeof destroy
}

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.params.id
  const book = selectors.entity(schemas.BOOK, bookId)(state)

  return {
    book
  }
}

@CSSModules(styles)
class Viewer extends Component<AllProps, void> {

  bookId: string

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    this.props.initializeViewer(this.bookId)
  }

  componentWillUnmount() {
    this.props.destroy()
  }

  render() {
    return (
      <DocContainer bodyClass="viewer" title={this.props.book.title}>
        <VContainer/>
      </DocContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  { initializeViewer, destroy }
)(Viewer as any)
