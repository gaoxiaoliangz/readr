import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserList } from 'actions/index';
class ManageUsers extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUserList();
    }
    render() {
        let userListAll = this.props.userListAll ? this.props.userListAll : [];
        return (React.createElement("div", null, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, "Name"), React.createElement("td", null, "Date created"), React.createElement("td", null, "Actions")), userListAll.map((user, index) => {
            return (React.createElement("tr", {key: index}, React.createElement("td", null, user.id), React.createElement("td", null, user.username), React.createElement("td", null, user.dateCreated), React.createElement("td", null, React.createElement("a", {href: "#"}, "Delete"))));
        })))));
    }
}
function mapStateToProps(state, ownProps) {
    const type = 'all';
    const { pagination: { userList }, entities: { users } } = state;
    const userListPagination = userList[type];
    const userListAll = userListPagination ? userListPagination.ids.map(id => users[id]) : [];
    return {
        userListAll
    };
}
export default connect(mapStateToProps, { fetchUserList })(ManageUsers);
