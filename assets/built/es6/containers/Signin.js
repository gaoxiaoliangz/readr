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
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }
    handleSignin(event) {
        event.preventDefault();
        let params = {
            login: this.state.login,
            password: this.state.password
        };
        callApi(`${ApiRoots.LOCAL}auth`, { method: 'POST', data: params }).then(res => {
            this.props.handleNotification('登录成功！');
            setTimeout(function () {
                browserHistory.push('/');
            }, 600);
        }).catch((err) => {
            this.props.handleNotification(err.message);
        });
    }
    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (React.createElement("div", null, React.createElement(Body, {className: "signin"}), React.createElement(Branding, null), React.createElement(Container, null, React.createElement("form", {className: "content-container", action: `${ApiRoots.LOCAL}auth`, method: "post"}, React.createElement(Notification, {notification: this.props.notification}), React.createElement("h1", {className: "page-title"}, "欢迎回来"), React.createElement(Input, {onChange: this.handleInput.bind(this), value: this.state.login, name: "login", placeholder: "用户名或邮箱"}), React.createElement(Input, {onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码", type: "password"}), React.createElement(Button, {className: "z1", color: "blue", onClick: this.handleSignin.bind(this)}, "登录"), React.createElement("p", {className: "hint"}, "没有账号？", React.createElement(Link, {to: "/signup"}, "注册"))))));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    user: state.user
}), { handleNotification })(Signin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1NpZ25pbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYztPQUM1QyxRQUFRLE1BQU0sb0JBQW9CO09BQ2xDLE9BQU8sTUFBTSxlQUFlO09BQzVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQzNDLFlBQVksTUFBTSx5QkFBeUI7T0FDM0MsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxLQUFLLE1BQU0sZ0JBQWdCO09BQzNCLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsU0FBUyxNQUFNLG9CQUFvQjtPQUNuQyxJQUFJLE1BQU0sbUJBQW1CO0FBRXBDLHFCQUFxQixTQUFTO0lBQzVCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUE7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLElBQUksTUFBTSxHQUFHO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQzlCLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEMsVUFBVSxDQUFDO2dCQUNULGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLFNBQ0Ysb0JBQUMsSUFBSSxHQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUcsRUFDM0Isb0JBQUMsUUFBUSxPQUFHLEVBQ1osb0JBQUMsU0FBUyxRQUNSLHFCQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssTUFBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLEdBQ2hGLG9CQUFDLFlBQVksR0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFhLEVBQUcsRUFDdkQscUJBQUMsRUFBRSxJQUFDLFNBQVMsRUFBQyxZQUFZLFVBQVUsRUFDcEMsb0JBQUMsS0FBSyxHQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFHLEVBQzNHLG9CQUFDLEtBQUssR0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFHLEVBQzdILG9CQUFDLE1BQU0sR0FBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFZLEVBQ3RGLHFCQUFDLENBQUMsSUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFNLG9CQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsU0FBUyxRQUFVLENBQUksQ0FDcEQsQ0FDRyxDQUNSLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLEtBQUssSUFBSSxDQUFDO0lBQ1IsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWTtJQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Q0FDakIsQ0FBQyxFQUNGLEVBQUUsa0JBQWtCLEVBQVMsQ0FDOUIsQ0FBQyxNQUFNLENBQUMsQ0FBQSJ9