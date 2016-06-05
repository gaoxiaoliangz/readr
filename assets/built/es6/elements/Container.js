import React, { Component } from 'react';
class Container extends Component {
    render() {
        let className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ` ${this.props.className}` : '');
        return (React.createElement("div", {className: className}, this.props.children));
    }
}
export default Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9lbGVtZW50cy9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87QUFFeEMsd0JBQXdCLFNBQVM7SUFDL0IsTUFBTTtRQUNKLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsaUJBQWlCLEdBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFFekgsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBRSxTQUFVLEdBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUyxDQUNqQixDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsU0FBUyxDQUFBIn0=