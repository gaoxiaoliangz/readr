import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Fade extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let className = this.props.className?this.props.className:null
        return (React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "fade", transitionEnterTimeout: 300, transitionLeaveTimeout: 300}, this.props.children));
    }
}
export default Fade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvZWxlbWVudHMvYW5pbWF0aW9ucy9GYWRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLHVCQUF1QixNQUFNLG1DQUFtQztBQUV2RSxtQkFBbUIsU0FBUztJQUMxQixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELE1BQU07UUFDSixpRUFBaUU7UUFDakUsTUFBTSxDQUFDLENBQ0wsb0JBQUMsdUJBQXVCLEdBQ3RCLFNBQVMsRUFBQyxLQUFLLEVBQ2YsY0FBYyxFQUFDLE1BQU0sRUFDckIsc0JBQXNCLEVBQUUsR0FBSSxFQUM1QixzQkFBc0IsRUFBRSxHQUFJLEdBRTNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUyxDQUNHLENBQzNCLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsSUFBSSxDQUFBIn0=