import React, { Component } from 'react';
import { Link } from 'react-router';
class CandyBox extends Component {
    render() {
        let list = this.props.list;
        let title = this.props.title;
        let moreLink = this.props.moreLink ? this.props.moreLink : null;
        return (React.createElement("div", {className: "candy-box"}, React.createElement("h3", {className: "box-title"}, title), moreLink ? (React.createElement(Link, {to: moreLink}, "查看更多")) : null, React.createElement("ul", null, list.map((item, index) => (React.createElement("li", {key: index}, React.createElement(Link, {to: item.link}, item.name)))))));
    }
}
export default CandyBox;
