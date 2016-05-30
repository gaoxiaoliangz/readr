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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlVXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbnRhaW5lcnMvY29uc29sZS9NYW5hZ2VVc2Vycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlO0FBRTdDLDBCQUEwQixTQUFTO0lBRWpDLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQTtRQUVsRSxNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLFNBQ0YscUJBQUMsS0FBSyxTQUNKLHFCQUFDLEtBQUssU0FDSixxQkFBQyxFQUFFLFNBQ0QscUJBQUMsRUFBRSxjQUFRLEVBQ1gscUJBQUMsRUFBRSxnQkFBVSxFQUNiLHFCQUFDLEVBQUUsd0JBQWtCLEVBQ3JCLHFCQUFDLEVBQUUsbUJBQWEsQ0FDYixFQUNKLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSztZQUMzQixNQUFNLENBQUMsQ0FDTCxxQkFBQyxFQUFFLElBQUMsR0FBRyxFQUFFLEtBQU0sR0FDYixxQkFBQyxFQUFFLFNBQUUsSUFBSSxDQUFDLEVBQUcsQ0FBSyxFQUNsQixxQkFBQyxFQUFFLFNBQUUsSUFBSSxDQUFDLFFBQVMsQ0FBSyxFQUN4QixxQkFBQyxFQUFFLFNBQUUsSUFBSSxDQUFDLFdBQVksQ0FBSyxFQUMzQixxQkFBQyxFQUFFLFNBQUMscUJBQUMsQ0FBQyxJQUFDLElBQUksRUFBQyxHQUFHLFlBQVcsQ0FBSyxDQUM1QixDQUNOLENBQUE7UUFDSCxDQUFDLENBQUUsQ0FDRyxDQUNGLENBQ0osQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCx5QkFBeUIsS0FBSyxFQUFFLFFBQVE7SUFDdEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFBO0lBRWxCLE1BQU0sRUFDSixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFDeEIsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQ3BCLEdBQUcsS0FBSyxDQUFBO0lBRVQsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekMsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLEdBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFBO0lBRXJGLE1BQU0sQ0FBQztRQUNMLFdBQVc7S0FDWixDQUFBO0FBQ0gsQ0FBQztBQUVELGVBQWUsT0FBTyxDQUNwQixlQUFlLEVBQ2YsRUFBRSxhQUFhLEVBQVMsQ0FDekIsQ0FBQyxXQUFXLENBQUMsQ0FBQSJ9