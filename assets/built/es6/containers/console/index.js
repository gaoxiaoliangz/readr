import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Container from 'elements/Container';
import Icon from 'elements/Icon';
import ConsoleBranding from 'components/ConsoleBranding';
import { userAuth, sendNotification } from 'actions/index';
import Notification from 'components/Notification';
import menus from './menus';
class Console extends Component {
    componentDidMount() {
        this.props.userAuth();
    }
    renderMenu(menuMapping, currentPath) {
        let currentMenu = {
            rootIndex: 0,
            subIndex: 0
        };
        menuMapping.forEach((item, rootIndex) => {
            let subIndex;
            let result = item.subMenu.filter((item, index) => {
                if (item.path === currentPath) {
                    subIndex = index;
                    return true;
                }
            });
            if (result.length > 0) {
                currentMenu.rootIndex = rootIndex;
                currentMenu.subIndex = subIndex;
            }
        });
        let rootMenu = (React.createElement("ul", {className: "nav-side nav-side-root"}, menuMapping.map((menu, index) => {
            let className = `menu-${menu.component}`;
            if (index === currentMenu.rootIndex) {
                className += ' current';
            }
            return (React.createElement("li", {key: index, className: className}, React.createElement(Link, {to: `/${menu.path}`}, React.createElement(Icon, {name: menu.component}))));
        })));
        let subMenu = (React.createElement("ul", {className: "nav-side nav-side-sub"}, menuMapping[currentMenu.rootIndex].subMenu.map((menu, index) => {
            let className = `menu-${menu.component}`;
            if (index === currentMenu.subIndex) {
                className += ' current';
            }
            return (React.createElement("li", {key: index, className: className}, React.createElement(Link, {to: `/${menu.path}`}, menu.displayName)));
        })));
        return (React.createElement("div", {className: "sidebar-left"}, rootMenu, subMenu));
    }
    render() {
        let isAdmin = this.props.session.user.role === 'admin' ? true : false;
        let username = this.props.session.user.username ? this.props.session.user.username : null;
        let pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
        return (React.createElement("div", null, React.createElement(ConsoleBranding, {isAdmin: isAdmin, username: username}), React.createElement(Container, {isFluid: true}, this.props.notifications.filter(noti => noti.visible).length > 0
            ? (React.createElement("div", {className: "notifications"}, this.props.notifications.map((noti, index) => (React.createElement(Notification, {key: index, type: noti.type, message: noti.message, visible: noti.visible})))))
            : null, this.renderMenu(menus, pathname), React.createElement("div", {className: "content"}, this.props.children))));
    }
}
export default connect(state => ({
    notifications: state.components.notifications,
    session: state.session,
    routing: state.routing
}), { sendNotification, userAuth })(Console);
