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
