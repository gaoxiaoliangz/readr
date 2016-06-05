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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUU1QyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxTQUFTLE1BQU0sb0JBQW9CO09BQ25DLFFBQVEsTUFBTSxxQkFBcUI7T0FDbkMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQ3JELFlBQVksTUFBTSx5QkFBeUI7QUFHbEQsa0JBQWtCLFNBQVM7SUFFekIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFHRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtRQUVuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFDLElBQUksR0FBQyxLQUFLLENBQUE7WUFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDN0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEdBQUcsU0FDRixvQkFBQyxRQUFRLEdBQUMsT0FBTyxFQUFFLE9BQVEsRUFBQyxRQUFRLEVBQUUsUUFBUyxFQUFHLEVBQ2xELG9CQUFDLFNBQVMsUUFDUixvQkFBQyxZQUFZLEdBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBYSxFQUFHLEVBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUyxDQUNYLEVBQ1osb0JBQUMsUUFBUSxPQUFHLENBQ1IsQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLE9BQU8sQ0FDcEIsS0FBSyxJQUFJLENBQUM7SUFDUixZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZO0lBQzNDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztDQUN2QixDQUFDLEVBQ0YsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQVMsQ0FDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQSJ9