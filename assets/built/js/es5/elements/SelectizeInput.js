'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectizeInput = function (_Component) {
  _inherits(SelectizeInput, _Component);

  function SelectizeInput(props) {
    _classCallCheck(this, SelectizeInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectizeInput).call(this, props));

    _this.state = {
      showOptions: false,
      focus: false,
      value: '',
      expendedOptionIndex: 0
    };
    return _this;
  }

  _createClass(SelectizeInput, [{
    key: 'clearState',
    value: function clearState(callback) {
      this.setState({
        showOptions: false,
        value: '',
        expendedOptionIndex: 0
      }, function () {
        if (callback) {
          callback();
        }
      });
    }
  }, {
    key: 'addValue',
    value: function addValue(index) {
      var _this2 = this;

      this.clearState(function () {
        _this2.props.onValuesChange(index, 'ADD');
      });
    }
  }, {
    key: 'removeValue',
    value: function removeValue(index) {
      var _this3 = this;

      this.clearState(function () {
        _this3.props.onValuesChange(index, 'REMOVE');
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.keyCode === 8 && !this.state.value) {
        this.removeValue(this.props.values.length - 1);
      }
      if (e.keyCode === 13 && this.state.showOptions) {
        e.preventDefault();
        this.addValue(0);
      }
    }
  }, {
    key: 'getFocus',
    value: function getFocus() {
      this.refs.input.focus();
    }
  }, {
    key: 'expendOption',
    value: function expendOption(index) {
      this.setState({
        expendedOptionIndex: index
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.value !== '') {
        this.setState({
          showOptions: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var value = this.state.value;
      var values = this.props.values;
      var options = this.props.options ? this.props.options : [];
      var _onChange = this.props.onChange ? this.props.onChange : null;
      var initialInputWidth = this.props.initialInputWidth ? this.props.initialInputWidth : '100%';
      var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : initialInputWidth;
      var placeholder = values.length > 0 ? '' : this.props.placeholder;
      var className = 'selectize-input' + (this.props.className ? ' ' + this.props.className : '') + (this.state.focus === true ? ' focus' : '') + (values.length === 0 ? ' empty' : '');
      var addNewValue = this.props.addNewValue ? this.props.addNewValue : undefined;

      return _react2.default.createElement(
        'div',
        { onClick: this.getFocus.bind(this), className: className },
        values.map(function (value, index) {
          return _react2.default.createElement(
            'span',
            { key: index, className: 'tag' },
            value,
            _react2.default.createElement(_Icon2.default, {
              size: "small",
              name: 'close-light',
              onClick: _this4.removeValue.bind(_this4, index)
            })
          );
        }),
        _react2.default.createElement('input', {
          style: { width: inputWidth },
          ref: 'input',
          value: value,
          placeholder: placeholder,
          onKeyDown: this.handleKeyPress.bind(this),
          onBlur: function onBlur() {
            _this4.setState({ focus: false });
          },
          onFocus: function onFocus() {
            _this4.setState({ focus: true });
          },
          onChange: function onChange(event) {
            _this4.setState({
              value: event.target.value
            });
            _onChange(event);
          }
        }),
        this.state.showOptions && this.state.value !== '' ? _react2.default.createElement(
          'ul',
          { className: 'query-results' },
          options.map(function (option, index) {
            if (typeof option === 'string') {
              return _react2.default.createElement(
                'li',
                { onClick: _this4.addValue.bind(_this4, index), key: index },
                option
              );
            } else if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
              var showMoreInfo = true;
              return _react2.default.createElement(
                'li',
                {
                  onMouseOver: function onMouseOver() {
                    _this4.expendOption(index);
                  },
                  onClick: _this4.addValue.bind(_this4, index),
                  key: index
                },
                option.thumb && _this4.state.expendedOptionIndex === index ? _react2.default.createElement(
                  'div',
                  { className: 'thumb' },
                  _react2.default.createElement('img', { src: option.thumb })
                ) : null,
                _react2.default.createElement(
                  'h3',
                  null,
                  option.value
                ),
                option.subInfo && _this4.state.expendedOptionIndex === index ? _react2.default.createElement(
                  'p',
                  null,
                  option.subInfo
                ) : null
              );
            }
          }),
          options.length === 0 && addNewValue ? _react2.default.createElement(
            'li',
            { onClick: addNewValue, className: 'add' },
            'Add ',
            this.state.value
          ) : null
        ) : null
      );
    }
  }]);

  return SelectizeInput;
}(_react.Component);

SelectizeInput.propTypes = {
  // an array that contains strings
  values: _react2.default.PropTypes.array.isRequired,
  // takes two parameters: targetIndex, type: Add, REMOVE
  onValuesChange: _react2.default.PropTypes.func,
  // options can be an plain array or an array of object {value, subInfo, thumb} providing more info
  options: _react2.default.PropTypes.array,
  // add new value when search doesn't match anything
  addNewValue: _react2.default.PropTypes.func
};

exports.default = SelectizeInput;