import React, { Component } from 'react';
class Dialog extends Component {
    render() {
        const defaultClass = 'dialog z1';
        let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass;
        let content = this.props.content;
        let actions = this.props.actions;
        return (React.createElement("div", {className: className}, React.createElement("p", null, content), React.createElement("div", {className: "actions"}, actions.map((action, index) => {
            return React.createElement("span", {key: index, onClick: action.function}, action.text);
        }))));
    }
}
export default Dialog;
