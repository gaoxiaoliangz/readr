import React, { Component } from 'react';
import Icon from '../elements/Icon';
class Notification extends Component {
    render() {
        const type = this.props.type ? this.props.type : 'success';
        return (React.createElement("div", null, this.props.visible && (React.createElement("div", {className: `notification notification--${type} z1`.trim()}, React.createElement(Icon, {onClick: this.props.onRequestClose, name: "close"}), this.props.message))));
    }
}
export default Notification;
