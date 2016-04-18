import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import * as actions from 'actions/confirm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Confirm extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let confirm = this.props.confirm
    let actions = this.props.actions

    return (
      <div>
        { confirm.isVisible?(
          <div className="confirm-dialog mui--z1">
            <div className="content">{confirm.content}</div>
            <Button onClick={actions.confirmYes.bind(this)} color="primary" className="mui--z1">是</Button>
            <Button onClick={actions.confirmNo.bind(this)}>否</Button>
          </div>
        ):null }
      </div>
    )
  }
}

export default connect(
  state => ({
    confirm: state.confirm
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Confirm)
