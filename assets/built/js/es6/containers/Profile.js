import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNotification, userAuth } from 'actions/index';
class Profile extends Component {
    // static fetchData({store, params}) {
    //   return store.dispatch(fetch())
    // }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.userAuth();
    }
    render() {
        let user = this.props.session.user;
        return (React.createElement("div", {className: "profile"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-8"}, React.createElement("h1", {className: "page-title"}, "个人资料"), React.createElement("ul", null, React.createElement("li", null, React.createElement("label", null, "用户名"), React.createElement("span", null, user.username)), React.createElement("li", null, React.createElement("label", null, "邮箱"), React.createElement("span", null, user.email)), React.createElement("li", null, React.createElement("label", null, "密码"), React.createElement("span", null, "******")))))));
    }
}
export default connect(state => ({
    notification: state.notification,
    session: state.session
}), { handleNotification, userAuth })(Profile);
