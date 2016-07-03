import React, { Component } from 'react';
import { connect } from 'react-redux';
import Branding from 'components/Branding';
import Container from 'elements/Container';
import Colophon from 'components/Colophon';
import { userAuth } from 'actions/index';
// const s = require('!style!raw!./App.css')
// function mapStateToProps(state) {
//   return {
//     test: 'hahah',
//     notification: state.components.notification,
//     session: state.session
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) };
// }
// @connect(
//   mapStateToProps,
//   { handleNotification, userAuth } as any
// )
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
            isAdmin = this.props.session.user.role === 'admin';
            username = this.props.session.user.username;
        }
        return (React.createElement("div", null, React.createElement(Branding, {isAdmin: isAdmin, username: username}), React.createElement(Container, null, this.props.children), React.createElement(Colophon, null)));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    session: state.session
}), { userAuth })(App);
