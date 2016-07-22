import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../actions'
import Alert from '../elements/alert'

interface Props {
  notifications?: any
}

interface State {
}

class Root extends Component<Props, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="app-root">
        {
          this.props.notifications.filter(noti => noti.visible).length > 0
          ? (
            <div className="notifications">
              {
                this.props.notifications.map((noti, index) => (
                  <Alert
                    key={index}
                    type={noti.type}
                    message={noti.message}
                    visible={noti.visible}
                  />
                ))
              }
            </div>
          )
          : null
        }
        {this.props.children}
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({ notifications: state.components.notifications}),
  { sendNotification }
)(Root as any)