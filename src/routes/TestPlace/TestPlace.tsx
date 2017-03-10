import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
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

class TestPlace extends Component<AllProps, LocalState> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Test Place</h1>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
  // mapDispatchToProps
  // { actions: _.assign({}, actions) }
)(TestPlace)
