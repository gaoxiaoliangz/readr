import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Console from 'containers/console/index';
import ManageBooks from 'containers/console/ManageBooks';
import ManageUsers from 'containers/console/ManageUsers';
import AddBook from 'containers/console/AddBook';
import AddCollection from 'containers/console/AddCollection';
import NoMatch from 'containers/NoMatch';
export default (React.createElement(Router, null, React.createElement(Route, {path: "/console", component: Console}, React.createElement(IndexRoute, {component: ManageBooks}), React.createElement(Route, {path: "managebooks", component: ManageBooks}), React.createElement(Route, {path: "manageusers", component: ManageUsers}), React.createElement(Route, {path: "addbook", component: AddBook}), React.createElement(Route, {path: "collection/new", component: AddCollection})), React.createElement(Route, {path: "*", component: NoMatch})));
