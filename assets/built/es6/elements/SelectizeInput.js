import React, { Component } from 'react';
import Icon from '../elements/Icon';
class SelectizeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            focus: false,
            value: '',
            expendedOptionIndex: 0
        };
        this.hideOptions = this.hideOptions.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.showOptions = this.showOptions.bind(this);
    }
    addValue(newValue) {
        this.props.onValuesChange(this.props.values.concat(newValue));
        if (this.props.onOptionsChange) {
            this.props.onOptionsChange(this.props.options.map(option => (option.value === newValue.value
                ? Object.assign({}, option, { disabled: true })
                : option)));
        }
        this.clearInputValue();
        if (typeof this.props.stayFocused === 'undefined' || this.props.stayFocused !== false) {
            this.focusInput();
        }
        this.hideOptions();
    }
    removeValue(index) {
        let newValues = [];
        let removedValue;
        if (index === -1) {
            newValues = this.props.values.slice(0, this.props.values.length - 1);
            removedValue = this.props.values[this.props.values.length - 1].value;
        }
        else {
            newValues = this.props.values
                .filter((v, i) => {
                removedValue = v.value;
                return i !== index;
            });
        }
        if (this.props.onOptionsChange) {
            this.props.onOptionsChange(this.props.options.map(option => (option.value === removedValue
                ? Object.assign({}, option, { disabled: false })
                : option)));
        }
        this.props.onValuesChange(newValues);
    }
    clearInputValue() {
        this.props.onInputChange('');
    }
    handleKeyPress(e) {
        if (e.keyCode === 8 && !this.props.value) {
            this.removeValue(-1);
        }
        // todo
        // if (e.keyCode === 13 && this.state.showOptions) {
        //   this.addValue()
        // }
    }
    focusInput() {
        this.input.focus();
    }
    hideOptions() {
        this.setState({
            showOptions: false
        });
    }
    showOptions(e) {
        e.stopPropagation();
        this.setState({
            showOptions: true
        });
    }
    componentDidMount() {
        window.addEventListener('click', this.hideOptions);
    }
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.hideOptions);
    }
    render() {
        let label = this.props.label ? this.props.label : null;
        let value = this.props.value ? this.props.value : '';
        let values = this.props.values;
        let options = this.props.options ? this.props.options : [];
        let inputWidth = values.length > 0 ? (value.length === 0 ? 16 : value.length * 16) : '100%';
        let placeholder = values.length > 0 ? '' : this.props.placeholder;
        let className = 'selectize-input' + (this.state.focus === true ? ' focus' : '') + (values.length === 0 ? ' empty' : '');
        let addNewValue = this.props.addNewValue ? this.props.addNewValue : undefined;
        return (React.createElement("div", {className: `selectize-input-wrap ${this.props.className ? this.props.className : ''}`.trim()}, label ? (React.createElement("label", {className: "form-label"}, label)) : null, React.createElement("div", {className: className, onClick: e => {
            this.focusInput();
            this.showOptions(e);
        }}, values.map((v, index) => {
            return (React.createElement("span", {key: index, className: "selectize-tag"}, v.name, React.createElement(Icon, {size: 'small', name: "close", onClick: e => {
                this.removeValue(index);
            }})));
        }), React.createElement("input", {style: { width: inputWidth }, ref: ref => { this.input = ref; }, value: value, placeholder: placeholder, onBlur: e => {
            this.setState({ focus: false });
        }, onFocus: e => {
            this.setState({ focus: true });
        }, onChange: e => {
            this.props.onInputChange(e.target.value);
        }, onKeyDown: e => {
            this.handleKeyPress(e);
        }})), (this.state.showOptions) ? (React.createElement("ul", {className: "selectize-query-results"}, options.map((option, index) => {
            if (option.disabled) {
                return React.createElement("li", {key: index, className: "disabled"}, option.name);
            }
            return (React.createElement("li", {key: index, onClick: e => {
                this.addValue(option);
                if (this.props.onOptionClick) {
                    this.props.onOptionClick(option);
                }
            }}, React.createElement("span", null, option.name)));
        }), addNewValue ? (React.createElement("li", {onClick: e => {
            this.props.onAddNewValue(this.props.value);
        }, className: "add"}, "添加 ", React.createElement("strong", null, this.props.value))) : null)) : null));
    }
}
export default SelectizeInput;
