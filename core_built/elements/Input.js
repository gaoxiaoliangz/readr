import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.className ? `input-wrap ${this.props.className}` : 'input-wrap';
        let props = Object.assign({}, this.props);
        delete props.className;
        return (React.createElement("div", {className: className}, React.createElement('input', props)));
    }
}
export default Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2Zyb250ZW5kL2VsZW1lbnRzL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO0FBV25ELG9CQUFvQixTQUFTO0lBQzNCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBQyxZQUFZLENBQUE7UUFDdEYsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQTtRQUV0QixNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFFLFNBQVUsR0FDdEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFHLENBQ25DLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxLQUFLLENBQUEifQ==