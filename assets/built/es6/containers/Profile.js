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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUU5QixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWU7QUFFNUQsc0JBQXNCLFNBQVM7SUFFN0Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxJQUFJO0lBRUosWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBRWxDLE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsU0FBUyxHQUN0QixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLEtBQUssR0FDbEIscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxVQUFVLEdBQ3ZCLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsWUFBWSxVQUFVLEVBQ3BDLHFCQUFDLEVBQUUsU0FDRCxxQkFBQyxFQUFFLFNBQ0QscUJBQUMsS0FBSyxlQUFZLEVBQ2xCLHFCQUFDLElBQUksU0FBRSxJQUFJLENBQUMsUUFBUyxDQUFPLENBQ3pCLEVBQ0wscUJBQUMsRUFBRSxTQUNELHFCQUFDLEtBQUssY0FBVyxFQUNqQixxQkFBQyxJQUFJLFNBQUUsSUFBSSxDQUFDLEtBQU0sQ0FBTyxDQUN0QixFQUNMLHFCQUFDLEVBQUUsU0FDRCxxQkFBQyxLQUFLLGNBQVcsRUFDakIscUJBQUMsSUFBSSxrQkFBYyxDQUNoQixDQUNGLENBQ0QsQ0FDRixDQUNGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLEtBQUssSUFBSSxDQUFDO0lBQ1IsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO0lBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztDQUN2QixDQUFDLEVBQ0YsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQVMsQ0FDeEMsQ0FBQyxPQUFPLENBQUMsQ0FBQSJ9