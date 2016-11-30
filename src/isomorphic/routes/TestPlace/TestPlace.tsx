import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { sendNotification, loadSomething, saveSomething } from '../../store/actions'
import * as actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import { Button } from '../../elements/form'
import _ from 'lodash'

interface Props {
}

interface LocalState {
}

interface AllProps extends Props {
  routing: any
  // sendNotification: any
  // loadSomething: any
  // saveSomething: any
  actions: typeof actions
}

function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(_.assign({}, actions), dispatch)
//   }
// }

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
  // mapDispatchToProps
  // { actions: _.assign({}, actions) }
)
export default class TestPlace extends Component<AllProps, LocalState> {

  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.actions.updateBookProgress(89)
  // }

  render() {
    return (
      <div>
        <h1>Test Place</h1>
        <Button onClick={e => { this.props.actions.loadSomething() } }>load</Button>
        <span> </span>
        <Button onClick={e => { this.props.actions.saveSomething() } }>save</Button>
      </div>
    )
  }
}
