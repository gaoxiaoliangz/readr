import React, { Component } from 'react';
import { connect } from 'react-redux';
import Branding from 'components/Branding';
import Container from 'elements/Container';
import Colophon from 'components/Colophon';
import { userAuth, handleNotification } from 'actions/index';
import Notification from 'components/Notification';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.userAuth();
    }
    render() {
        let isAdmin = false;
        let username = null;
        if (this.props.session.user.role !== 'visitor') {
            isAdmin = this.props.session.user.role === 'admin' ? true : false;
            username = this.props.session.user.username;
        }
        return (React.createElement("div", null, React.createElement(Branding, {isAdmin: isAdmin, username: username}), React.createElement(Container, null, React.createElement(Notification, {notification: this.props.notification}), this.props.children), React.createElement(Colophon, null)));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    session: state.session
}), { handleNotification, userAuth })(App);
