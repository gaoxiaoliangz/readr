import React, { Component } from 'react';
import { connect } from 'react-redux';
import Branding from 'components/Branding';
import Container from 'elements/Container';
import Colophon from 'components/Colophon';
import { userAuth, handleNotification } from 'actions/index';
import Notification from 'components/Notification';
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
        return (React.createElement("div", null, React.createElement(Branding, {isAdmin: isAdmin, username: username}), React.createElement(Container, null, React.createElement(Notification, {notification: this.props.notification}), this.props.children), React.createElement(Colophon, null)));
    }
}
export default connect(state => ({
    notification: state.components.notification,
    session: state.session
}), { handleNotification, userAuth })(App);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUU1QyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxTQUFTLE1BQU0sb0JBQW9CO09BQ25DLFFBQVEsTUFBTSxxQkFBcUI7T0FDbkMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlO09BQ3JELFlBQVksTUFBTSx5QkFBeUI7QUFHbEQsNENBQTRDO0FBSzVDLG9DQUFvQztBQUNwQyxhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLG1EQUFtRDtBQUNuRCw2QkFBNkI7QUFDN0IsTUFBTTtBQUNOLElBQUk7QUFHSiwwQ0FBMEM7QUFDMUMsc0VBQXNFO0FBQ3RFLElBQUk7QUFFSixZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1QyxJQUFJO0FBQ0osa0JBQWtCLFNBQVM7SUFFekIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFHRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtRQUVuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFBO1lBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzdDLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLFNBQ0Ysb0JBQUMsUUFBUSxHQUFDLE9BQU8sRUFBRSxPQUFRLEVBQUMsUUFBUSxFQUFFLFFBQVMsRUFBRyxFQUNsRCxvQkFBQyxTQUFTLFFBQ1Isb0JBQUMsWUFBWSxHQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQWEsRUFBRyxFQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDWCxFQUNaLG9CQUFDLFFBQVEsT0FBRyxDQUNSLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBSUQsZUFBZSxPQUFPLENBQ3BCLEtBQUssSUFBSSxDQUFDO0lBQ1IsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWTtJQUMzQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Q0FDdkIsQ0FBQyxFQUNGLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFTLENBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUEifQ==