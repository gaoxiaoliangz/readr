import React, { Component } from 'react';
class Icon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let name = this.props.name;
        let method = this.props.onClick;
        let size = this.props.size;
        return (React.createElement("span", {className: `icon icon-${name} ${size}`, onClick: method}));
    }
}
export default Icon;
