import React, { Component } from 'react';
import withSideEffect from 'react-side-effect';
class Body extends Component {
    render() {
        return React.createElement("div", {className: "react-body-class hidden"});
    }
}
function reducePropsToState(propsList) {
    let className;
    propsList.forEach(function (props) {
        className = props.className;
    });
    return className;
}
function handleStateChangeOnClient(className) {
    if (typeof className !== 'undefined') {
        document.body.className = className;
    }
    else {
        document.body.removeAttribute('class');
    }
}
export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(Body);
