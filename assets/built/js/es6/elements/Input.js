import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.className ? `input-wrap ${this.props.className}` : 'input-wrap';
        let props = Object.assign({}, this.props);
        delete props.className;
        return (React.createElement("div", {className: className}, React.createElement('input', props)));
    }
}
export default Input;
