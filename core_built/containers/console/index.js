import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Container from 'elements/Container';
import Icon from 'elements/Icon';
import ConsoleBranding from 'components/ConsoleBranding';
import { userAuth, handleNotification } from 'actions/index';
import Notification from 'components/Notification';
const menuMapping = [
    {
        component: 'books',
        displayName: '',
        path: 'console/managebooks',
        subMenu: [
            {
                component: 'managebooks',
                displayName: 'Manage Books',
                path: 'console'
            },
            {
                component: 'addbook',
                displayName: 'Add Book',
                path: 'console/addbook'
            },
            {
                component: 'addcollection',
                displayName: 'Add Collection',
                path: 'console/collection/new'
            }
        ]
    },
    {
        component: 'users',
        displayName: '',
        path: 'console/manageusers',
        subMenu: [
            {
                component: 'manageusers',
                displayName: 'Manage Users',
                path: 'console/manageusers'
            }
        ]
    },
    {
        component: 'database',
        displayName: '',
        path: 'console/managebooks',
        subMenu: []
    },
    {
        component: 'statistics',
        displayName: '',
        path: 'console/managebooks',
        subMenu: []
    }
];
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
        return (React.createElement("div", null, React.createElement(ConsoleBranding, {isAdmin: isAdmin, username: username}), React.createElement(Container, {isFluid: true}, React.createElement(Notification, {notification: this.props.notification}), this.renderMenu(menuMapping, pathname), React.createElement("div", {className: "content"}, this.props.children))));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    session: state.session,
    routing: state.routing
}), { handleNotification, userAuth })(Console);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbnRhaW5lcnMvY29uc29sZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUM1QyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BQzlCLFNBQVMsTUFBTSxvQkFBb0I7T0FDbkMsSUFBSSxNQUFNLGVBQWU7T0FDekIsZUFBZSxNQUFNLDRCQUE0QjtPQUNqRCxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWU7T0FDckQsWUFBWSxNQUFNLHlCQUF5QjtBQUdsRCxNQUFNLFdBQVcsR0FBRztJQUNsQjtRQUNFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxTQUFTLEVBQUUsYUFBYTtnQkFDeEIsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxVQUFVO2dCQUN2QixJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLFdBQVcsRUFBRSxnQkFBZ0I7Z0JBQzdCLElBQUksRUFBRSx3QkFBd0I7YUFDL0I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsT0FBTztRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixJQUFJLEVBQUUscUJBQXFCO2FBQzVCO1NBQ0Y7S0FDRjtJQUNEO1FB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