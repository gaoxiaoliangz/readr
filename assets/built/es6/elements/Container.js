import React, { Component } from 'react';
class Container extends Component {
    render() {
        let className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ` ${this.props.className}` : '');
        return (React.createElement("div", {className: className}, this.props.children));
    }
}
export default Container;
