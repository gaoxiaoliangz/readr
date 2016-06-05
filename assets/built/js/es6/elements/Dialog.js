import React, { Component } from 'react';
class Dialog extends Component {
    render() {
        const defaultClass = 'dialog z1';
        let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass;
        let content = this.props.content;
        let actions = this.props.actions;
        return (React.createElement("div", {className: className}, React.createElement("p", null, content), React.createElement("div", {className: "actions"}, actions.map((action, index) => {
            return React.createElement("span", {key: index, onClick: action.function}, action.text);
        }))));
    }
}
export default Dialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9lbGVtZW50cy9EaWFsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87QUFTeEMscUJBQXFCLFNBQVM7SUFDNUIsTUFBTTtRQUNKLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQTtRQUVoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFDLFlBQVksQ0FBQTtRQUMzRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUVoQyxNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFFLFNBQVUsR0FDeEIscUJBQUMsQ0FBQyxTQUFFLE9BQVEsQ0FBSSxFQUNoQixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLO1lBQ3hCLE1BQU0sQ0FBQyxxQkFBQyxJQUFJLElBQUMsR0FBRyxFQUFFLEtBQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVMsR0FBRSxNQUFNLENBQUMsSUFBSyxDQUFPLENBQUE7UUFDekUsQ0FBQyxDQUNGLENBQ0csQ0FDRixDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsTUFBTSxDQUFBIn0=