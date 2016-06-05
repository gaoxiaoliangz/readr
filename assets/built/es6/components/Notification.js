import React, { Component } from 'react';
class Notification extends Component {
    render() {
        let notification = this.props.notification;
        return (React.createElement("div", null, notification.isVisible ? (React.createElement("div", {className: "msg mui--z1"}, notification.content)) : null));
    }
}
export default Notification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb21wb25lbnRzL05vdGlmaWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztBQUV4QywyQkFBMkIsU0FBUztJQUNsQyxNQUFNO1FBQ0osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7UUFFMUMsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxTQUNBLFlBQVksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FBRSxZQUFZLENBQUMsT0FBUSxDQUFNLENBQUMsR0FBQyxJQUFNLENBQ3ZGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxZQUFZLENBQUEifQ==