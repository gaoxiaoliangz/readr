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
import { JUMP_REQUEST_TYPES } from './Viewer.constants'
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
    this.props.actions.initializeViewerConfig(this.bookId, {
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

      // 这边如果先获取到进度下面的 computed 事件里面获取的进度就会和这边一样
      // 从而不触发 change
      // 所以这种 load 只能执行一次
      // 但是虽然 session 里面的请求先发送
      // 如果 session 的请求很慢很慢，那么下面 computed 里面的 progress 获取请求发送就会不成功
      // this.props.actions.loadBookProgress(this.bookId)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    this.props.actions.initializeViewerConfig(this.bookId)
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
          } }
          onComputedMount={() => {
            // TODO: 在 session 确定时已经发送过一次
            console.log('computed mount')
            this.props.actions.loadBookProgress(this.bookId)
          } }
          onJumpRequest={(newLoc, oldLoc, type) => {
            if (type !== JUMP_REQUEST_TYPES.LOC_CHANGE) {
              console.log(newLoc, oldLoc, type)
              this.props.actions.viewerJumpTo(newLoc)
            }
          } }
          />
      </DocContainer>
    )
  }
}
