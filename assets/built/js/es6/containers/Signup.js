import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import ApiRoots from 'constants/ApiRoots';
import callApi from 'utils/callApi';
import { handleNotification } from 'actions/index';
import Notification from 'components/Notification';
import Branding from 'components/Branding';
import Input from 'elements/Input';
import Button from 'elements/Button';
import Container from 'elements/Container';
import Body from 'side-effects/Body';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }
    handleSignup(event) {
        event.preventDefault();
        let params = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        callApi({ fullUrl: `${ApiRoots.LOCAL}users`, method: 'POST', data: params })
            .then(res => {
            this.props.handleNotification('注册成功！');
            setTimeout(function () {
                browserHistory.push('/');
            }, 600);
        }, err => {
            this.props.handleNotification(err.message);
        });
    }
    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (React.createElement("div", null, React.createElement(Body, {className: "signup"}), React.createElement(Branding, null), React.createElement(Container, null, React.createElement("form", {className: "content-container", method: "post", action: "/signup"}, React.createElement(Notification, {notification: this.props.notification}), React.createElement("h1", {className: "page-title"}, "加入 Readr"), React.createElement(Input, {onChange: this.handleInput.bind(this), value: this.state.username, name: "username", placeholder: "用户名"}), React.createElement(Input, {onChange: this.handleInput.bind(this), value: this.state.email, name: "email", placeholder: "邮箱"}), React.createElement(Input, {onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码 ", type: "password"}), React.createElement(Button, {className: "z1", color: "blue", onClick: this.handleSignup.bind(this)}, "注册"), React.createElement("p", {className: "hint"}, "没有账号？", React.createElement(Link, {to: "/signin"}, "登录"))))));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    user: state.user
}), { handleNotification })(Signup);
