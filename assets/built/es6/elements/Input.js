import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.className ? `input-wrap ${this.props.className}` : 'input-wrap';
        let props = Object.assign({}, this.props);
        delete props.className;
        return (React.createElement("div", {className: className}, React.createElement("input", {placeholder: this.props.placeholder, value: this.props.value, onChange: e => {
            this.props.onChange(e);
        }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null})));
    }
}
export default Input;
