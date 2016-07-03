var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
class BookPage extends Component {
    render() {
        let page = this.props.page;
        let style = this.props.style;
        return (React.createElement("li", {style: style}, React.createElement("div", {className: "content"}, page.props.children.map((node, index) => {
            if (node.type !== "p") {
                console.error("Unsupported content found!");
            }
            return (React.createElement("p", __assign({}, index === 0 ? { style: { marginTop: page.props.offset } } : {}, {key: index}), node.props.children));
        })), React.createElement("div", {className: "page-no"}, page.props.pageNo)));
    }
}
export default BookPage;
