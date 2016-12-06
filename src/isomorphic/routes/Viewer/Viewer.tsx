import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import DocContainer from '../../containers/DocContainer'
import * as selectors from '../../store/selectors'
import * as actions from '../../store/actions'
import ViewContainer from './components/ViewerContainer'
import { JUMP_REQUEST_TYPES } from './Viewer.constants'
import helpers from '../../helpers'
const styles = require('./Viewer.scss')

interface AllProps {
  book: {
    title: string
  }
  basicInfo: {
    isCalcMode?: boolean
    fluid?: boolean
    isTouchMode?: boolean
  }
  actions: typeof actions
}

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.params.id
  const book = selectors.common.entity('books', bookId)(state)
  const basicInfo = selectors.viewer.config(state)

  return {
    book,
    basicInfo
  }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles)
export default class Viewer extends Component<AllProps, void> {

  bookId: string

  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.handleProgressChange = this.handleProgressChange.bind(this)
    this.handleReinitializeRequest = this.handleReinitializeRequest.bind(this)
  }

  handleReinitializeRequest() {
    // this.props.actions.initializeViewerConfig(this.bookId, {
    //   // saga 里面判断 computed 为非空会自动设为 false
    //   // 所以这里要覆盖
    //   isCalcMode: true
    // })
    this.props.actions.configViewer(this.bookId, {
      isCalcMode: true
    })
  }

  handleProgressChange(newProgress) {
    this.props.actions.updateBookProgress(newProgress)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    this.props.actions.initializeViewer(this.bookId)
  }

  render() {
    // TODO: 移除回调函数
    return (
      <DocContainer bodyClass="viewer" title={this.props.book.title}>
        <ViewContainer
          bookId={this.bookId}
          onProgressChange={this.handleProgressChange}
          onReinitializeRequest={this.handleReinitializeRequest}
          onJumpRequest={(newLoc, oldLoc, type) => {
            helpers.print('onJumpRequest', newLoc, oldLoc, type)
            if (type !== JUMP_REQUEST_TYPES.LOC_CHANGE) {
              this.props.actions.viewerJumpTo(newLoc)
            }
          } }
          />
      </DocContainer>
    )
  }
}
