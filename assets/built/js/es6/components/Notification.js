import React, { Component } from 'react';
class Notification extends Component {
    render() {
        let notification = this.props.notification;
        return (React.createElement("div", null, notification.isVisible ? (React.createElement("div", {className: "msg mui--z1"}, notification.content)) : null));
    }
}
export default Notification;
