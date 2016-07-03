import React, { Component } from 'react';
class Loading extends Component {
    render() {
        return (React.createElement("div", {className: "loading-wrap"}, React.createElement("span", {className: "icon icon-loading"})));
    }
}
export default Loading;
