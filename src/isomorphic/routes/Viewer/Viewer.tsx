import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import DocContainer from '../../containers/DocContainer'
import * as selectors from '../../store/selectors'
import * as actions from '../../store/actions'
import { ROLES } from '../../constants'
import ViewContainer from './components/ViewerContainer'
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
    this.handleSessionDetermined = this.handleSessionDetermined.bind(this)
    this.handleReinitializeRequest = this.handleReinitializeRequest.bind(this)
  }

  handleReinitializeRequest() {
    this.props.actions.initializeViewer(this.bookId, {
      // saga 里面判断 computed 为非空会自动设为 false
      // 所以这里要覆盖
      isCalcMode: true
    })
  }

  handleProgressChange(newProgress) {
    this.props.actions.updateBookProgress(newProgress)
  }

  handleSessionDetermined(userRole) {
    if (userRole !== ROLES.VISITOR) {
      // 是否登录的判断逻辑放到 saga 里面了
      // 这边其实可以不用判断
      this.props.actions.loadBookProgress(this.bookId)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    this.props.actions.initializeViewer(this.bookId)
    this.props.actions.loadBook(this.bookId)
    this.props.actions.loadBookContent(this.bookId)
  }

  render() {
    return (
      <DocContainer bodyClass="viewer" title={this.props.book.title}>
        <ViewContainer
          bookId={this.bookId}
          onProgressChange={this.handleProgressChange}
          onSessionDetermined={this.handleSessionDetermined}
          onReinitializeRequest={this.handleReinitializeRequest}
          onCloudProgressChange={(newVal, oldVal) => {
            this.props.actions.updateBookProgress(newVal)
          }}
        />
      </DocContainer>
    )
  }
}
