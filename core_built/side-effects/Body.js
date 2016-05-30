import React, { Component } from 'react';
import withSideEffect from 'react-side-effect';
class Body extends Component {
    render() {
        return React.createElement("div", {className: "react-body-class hidden"});
    }
}
function reducePropsToState(propsList) {
    let className;
    propsList.forEach(function (props) {
        className = props.className;
    });
    return className;
}
function handleStateChangeOnClient(className) {
    if (typeof className !== 'undefined') {
        document.body.className = className;
    }
    else {
        document.body.removeAttribute('class');
    }
}
export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(Body);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZnJvbnRlbmQvc2lkZS1lZmZlY3RzL0JvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBdUIsTUFBTSxPQUFPO09BQ3RELGNBQWMsTUFBTSxtQkFBbUI7QUFNOUMsbUJBQW1CLFNBQVM7SUFDMUIsTUFBTTtRQUNKLE1BQU0sQ0FBQyxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLHlCQUF5QixFQUFPLENBQUE7SUFDeEQsQ0FBQztBQUNILENBQUM7QUFFRCw0QkFBNEIsU0FBUztJQUNuQyxJQUFJLFNBQVMsQ0FBQTtJQUViLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLO1FBQy9CLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFBO0lBQzdCLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQsbUNBQW1DLFNBQVM7SUFDMUMsRUFBRSxDQUFBLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDckMsQ0FBQztJQUFBLElBQUksQ0FBQSxDQUFDO1FBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLGNBQWMsQ0FDM0Isa0JBQWtCLEVBQ2xCLHlCQUF5QixDQUMxQixDQUFDLElBQUksQ0FBQyxDQUFDIn0=