import React, { Component } from 'react';
import { Link } from 'react-router';
import Container from 'elements/Container';
class Branding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownMenuVisible: false
        };
    }
    toggleDropdownMenu() {
        this.setState({
            isDropdownMenuVisible: !this.state.isDropdownMenuVisible
        });
    }
    render() {
        let username = this.props.username;
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
        return (React.createElement("div", {className: "branding"}, React.createElement(Container, {className: "clearfix"}, React.createElement("div", null, React.createElement("h1", {className: "logo left"}, React.createElement(Link, {to: "/"}, "readr")), React.createElement("div", {className: "nav left"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/browse"}, "浏览")), React.createElement("li", null, React.createElement(Link, {to: "/collections"}, "书单")))), username ? (React.createElement("div", {onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right"}, React.createElement("span", {className: "recent-reading"}, "最近阅读"), React.createElement("span", {className: "username"}, username, isAdmin ? (React.createElement("span", {className: "badge-dark"}, "Admin")) : null), this.state.isDropdownMenuVisible ? (React.createElement("ul", {onClick: this.toggleDropdownMenu.bind(this), className: "dropdown-menu"}, isAdmin === true ? (React.createElement("li", null, React.createElement("a", {href: "/console"}, "控制台"))) : null, React.createElement("li", null, React.createElement(Link, {to: `/shelf`}, "书架")), React.createElement("li", null, React.createElement(Link, {to: `/profile`}, "个人主页")), React.createElement("li", null, React.createElement(Link, {to: `/settings`}, "设置")), React.createElement("li", null, React.createElement("a", {href: '/logout'}, "退出")))) : null)) : (React.createElement("div", {className: "nav right"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/signin"}, "登录")), React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "注册")))))))));
    }
}
export default Branding;
