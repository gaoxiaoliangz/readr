import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import DocContainer from '../../components/DocContainer'
import * as selectors from '../../selectors'
import { initializeViewer } from '../../actions/viewer'
import VContainer from './components/VContainer'
import styles from './Viewer.scss'

interface AllProps {
  book: {
    title: string
  }
  initializeViewer: typeof initializeViewer
}

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.params.id
  const book = selectors.entity('books', bookId)(state)

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
  { initializeViewer }
)(Viewer as any)
