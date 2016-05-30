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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1NpZ251cC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYztPQUM1QyxRQUFRLE1BQU0sb0JBQW9CO09BQ2xDLE9BQU8sTUFBTSxlQUFlO09BQzVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQzNDLFlBQVksTUFBTSx5QkFBeUI7T0FDM0MsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxLQUFLLE1BQU0sZ0JBQWdCO09BQzNCLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsU0FBUyxNQUFNLG9CQUFvQjtPQUNuQyxJQUFJLE1BQU0sbUJBQW1CO0FBRXBDLHFCQUFxQixTQUFTO0lBQzVCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFFdEIsSUFBSSxNQUFNLEdBQUc7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUM5QixDQUFBO1FBRUQsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVB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