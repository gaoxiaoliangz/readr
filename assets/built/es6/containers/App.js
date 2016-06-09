import React, { Component } from 'react';
import { connect } from 'react-redux';
import Branding from 'components/Branding';
import Container from 'elements/Container';
import Colophon from 'components/Colophon';
import { userAuth, handleNotification } from 'actions/index';
import Notification from 'components/Notification';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUU1QyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxTQUFTLE1BQU0sb0JBQW9CO09BQ25DLFFBQVEsTUFBTSxxQkFBcUI7T0FDbkMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQ3JELFlBQVksTUFBTSx5QkFBeUI7QUFJbEQsb0NBQW9DO0FBQ3BDLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsbURBQW1EO0FBQ25ELDZCQUE2QjtBQUM3QixNQUFNO0FBQ04sSUFBSTtBQUdKLDBDQUEwQztBQUMxQyxzRUFBc0U7QUFDdEUsSUFBSTtBQUVKLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsNENBQTRDO0FBQzVDLElBQUk7QUFDSixrQkFBa0IsU0FBUztJQUV6QixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUdELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBRW5CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEdBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQTtZQUM3RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUM3QyxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxTQUNGLG9CQUFDLFFBQVEsR0FBQyxPQUFPLEVBQUUsT0FBUSxFQUFDLFFBQVEsRUFBRSxRQUFTLEVBQUcsRUFDbEQsb0JBQUMsU0FBUyxRQUNSLG9CQUFDLFlBQVksR0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFhLEVBQUcsRUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQ1gsRUFDWixvQkFBQyxRQUFRLE9BQUcsQ0FDUixDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUlELGVBQWUsT0FBTyxDQUNwQixLQUFLLElBQUksQ0FBQztJQUNSLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVk7SUFDM0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO0NBQ3ZCLENBQUMsRUFDRixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBUyxDQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFBIn0=