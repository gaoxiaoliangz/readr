import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Fade extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.className ? this.props.className : null;
        return (React.createElement("div", {className: className}, React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "fade", transitionEnterTimeout: 300, transitionLeaveTimeout: 300}, this.props.children)));
    }
}
export default Fade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvZWxlbWVudHMvYW5pbWF0aW9ucy9GYWRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLHVCQUF1QixNQUFNLG1DQUFtQztBQUV2RSxtQkFBbUIsU0FBUztJQUMxQixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUE7UUFFOUQsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBRSxTQUFVLEdBQ3hCLG9CQUFDLHVCQUF1QixHQUN0QixTQUFTLEVBQUMsS0FBSyxFQUNmLGNBQWMsRUFBQyxNQUFNLEVBQ3JCLHNCQUFzQixFQUFFLEdBQUksRUFDNUIsc0JBQXNCLEVBQUUsR0FBSSxHQUUzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDRyxDQUN0QixDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsSUFBSSxDQUFBIn0=