import React, { Component } from 'react';
class Icon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let name = this.props.name;
        let method = this.props.onClick;
        let size = this.props.size;
        return (React.createElement("span", {className: `icon icon-${name} ${size}`, onClick: method}));
    }
}
export default Icon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvZWxlbWVudHMvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztBQVFuRCxtQkFBbUIsU0FBUztJQUMxQixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtRQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtRQUUxQixNQUFNLENBQUMsQ0FDTCxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLGFBQWEsSUFBSSxJQUFJLElBQUksRUFBRyxFQUFDLE9BQU8sRUFBRSxNQUFPLEVBQVEsQ0FDdkUsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxJQUFJLENBQUEifQ==