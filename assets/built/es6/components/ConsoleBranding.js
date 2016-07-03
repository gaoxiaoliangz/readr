import React, { Component } from 'react';
import { Link } from 'react-router';
import Container from 'elements/Container';
class ConsoleBranding extends Component {
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
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
        return (React.createElement("div", {className: "branding console-branding"}, React.createElement(Container, {isFluid: true, className: "clearfix"}, React.createElement("div", null, React.createElement("h1", {className: "logo left"}, React.createElement(Link, {to: "/console"}, "readr"), React.createElement("span", {className: "sep"}, "|"), React.createElement("span", {className: "sub"}, "Console")), username ? (React.createElement("div", {onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right"}, React.createElement("span", {className: "username"}, username, isAdmin ? (React.createElement("span", {className: "badge-dark"}, "Admin")) : null), this.state.isDropdownMenuVisible ? (React.createElement("ul", {className: "dropdown-menu"}, isAdmin === true ? (React.createElement("li", null, React.createElement("a", {href: "/"}, "Back to readr"))) : null, React.createElement("li", null, React.createElement(Link, {to: `/profile/${username}`}, "我的账号")), React.createElement("li", null, React.createElement("a", {href: '/logout'}, "退出")))) : null)) : (React.createElement("div", {className: "nav right"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/signin"}, "登录")), React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "注册")))))))));
    }
}
export default ConsoleBranding;
