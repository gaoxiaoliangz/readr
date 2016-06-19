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
            username: '',
            email: '',
            password: ''
        };
    }
    handleSignup(event) {
        event.preventDefault();
        let params = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        callApi(`${ApiRoots.LOCAL}users`, { method: 'POST', data: params })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1NpZ251cC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYztPQUM1QyxRQUFRLE1BQU0sb0JBQW9CO09BQ2xDLE9BQU8sTUFBTSxlQUFlO09BQzVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQzNDLFlBQVksTUFBTSx5QkFBeUI7T0FDM0MsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxLQUFLLE1BQU0sZ0JBQWdCO09BQzNCLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsU0FBUyxNQUFNLG9CQUFvQjtPQUNuQyxJQUFJLE1BQU0sbUJBQW1CO0FBRXBDLHFCQUFxQixTQUFTO0lBQzVCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFFdEIsSUFBSSxNQUFNLEdBQUc7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUM5QixDQUFBO1FBRUQsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJ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