import React, { Component } from 'react';
import Icon from 'elements/Icon';
class SelectizeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            focus: false,
            value: '',
            expendedOptionIndex: 0
        };
    }
    clearState(callback) {
        this.setState({
            showOptions: false,
            value: '',
            expendedOptionIndex: 0
        }, () => {
            if (callback) {
                callback();
            }
        });
    }
    addValue(index) {
        this.clearState(() => {
            this.props.onValuesChange(index, 'ADD');
        });
    }
    removeValue(index) {
        this.clearState(() => {
            this.props.onValuesChange(index, 'REMOVE');
        });
    }
    handleKeyPress(e) {
        if (e.keyCode === 8 && !this.state.value) {
            this.removeValue(this.props.values.length - 1);
        }
        if (e.keyCode === 13 && this.state.showOptions) {
            e.preventDefault();
            this.addValue(0);
        }
    }
    getFocus() {
        let input = document.querySelector(this.refs.input);
        input.focus();
    }
    expendOption(index) {
        this.setState({
            expendedOptionIndex: index
        });
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.value !== '') {
            this.setState({
                showOptions: true
            });
        }
    }
    render() {
        let value = this.state.value;
        let values = this.props.values;
        let options = this.props.options ? this.props.options : [];
        let onChange = this.props.onChange ? this.props.onChange : null;
        let initialInputWidth = this.props.initialInputWidth ? this.props.initialInputWidth : '100%';
        let inputWidth = values.length > 0 ? (value.length === 0 ? 16 : value.length * 16) : initialInputWidth;
        let placeholder = values.length > 0 ? '' : this.props.placeholder;
        let className = 'selectize-input' + (this.props.className ? ` ${this.props.className}` : '') + (this.state.focus === true ? ' focus' : '') + (values.length === 0 ? ' empty' : '');
        let addNewValue = this.props.addNewValue ? this.props.addNewValue : undefined;
        return (React.createElement("div", {onClick: this.getFocus.bind(this), className: className}, values.map((value, index) => {
            return (React.createElement("span", {key: index, className: "tag"}, value, React.createElement(Icon, {size: "small", name: "close-light", onClick: this.removeValue.bind(this, index)})));
        }), React.createElement("input", {style: { width: inputWidth }, ref: "input", value: value, placeholder: placeholder, onKeyDown: this.handleKeyPress.bind(this), onBlur: () => {
            this.setState({ focus: false });
        }, onFocus: () => {
            this.setState({ focus: true });
        }, onChange: event => {
            this.setState({
                value: event.target.value
            });
            onChange(event);
        }}), this.state.showOptions && this.state.value !== '' ? (React.createElement("ul", {className: "query-results"}, options.map((option, index) => {
            if (typeof option === 'string') {
                return React.createElement("li", {onClick: this.addValue.bind(this, index), key: index}, option);
            }
            else if (typeof option === 'object') {
                let showMoreInfo = true;
                return (React.createElement("li", {onMouseOver: () => {
                    this.expendOption(index);
                }, onClick: this.addValue.bind(this, index), key: index}, option.thumb && this.state.expendedOptionIndex === index ? (React.createElement("div", {className: "thumb"}, React.createElement("img", {src: option.thumb}))) : null, React.createElement("h3", null, option.value), option.subInfo && this.state.expendedOptionIndex === index ? (React.createElement("p", null, option.subInfo)) : null));
            }
        }), options.length === 0 && addNewValue ? (React.createElement("li", {onClick: addNewValue, className: "add"}, "Add ", this.state.value)) : null)) : null));
    }
}
export default SelectizeInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aXplSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2VsZW1lbnRzL1NlbGVjdGl6ZUlucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLElBQUksTUFBTSxlQUFlO0FBcUJoQyw2QkFBNkIsU0FBUztJQU9wQyxZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxtQkFBbUIsRUFBRSxDQUFDO1NBQ3ZCLENBQUE7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEtBQUssRUFBRSxFQUFFO1lBQ1QsbUJBQW1CLEVBQUUsQ0FBQztTQUN2QixFQUFFO1lBQ0QsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDWixRQUFRLEVBQUUsQ0FBQTtZQUNaLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMs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