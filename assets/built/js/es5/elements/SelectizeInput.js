'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectizeInput = function (_Component) {
  _inherits(SelectizeInput, _Component);

  function SelectizeInput(props) {
    _classCallCheck(this, SelectizeInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectizeInput).call(this, props));

    _this.state = {
      tags: [],
      showQueryResult: false,
      focus: false
    };
    return _this;
  }

  _createClass(SelectizeInput, [{
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({
        focus: true
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        focus: false
      });
    }
  }, {
    key: 'removeTag',
    value: function removeTag(targetIndex) {
      this.props.resetValue();
      this.setState({
        tags: this.state.tags.filter(function (tag, index) {
          return targetIndex !== index ? true : false;
        }),
        showQueryResult: false
      });
      this.getFocus();
    }
  }, {
    key: 'handleKey',
    value: function handleKey(e) {
      if (e.keyCode === 8 && !this.props.value) {
        this.removeTag(this.state.tags.length - 1);
      }
      if (e.keyCode === 13 && this.state.showQueryResult) {
        this.addTag(this.props.queryResults[0]);
      }
    }
  }, {
    key: 'addTag',
    value: function addTag(tag) {
      this.props.resetValue();
      this.setState({
        tags: [].concat(_toConsumableArray(this.state.tags), [tag]),
        showQueryResult: false
      });
      this.getFocus();
    }
  }, {
    key: 'getFocus',
    value: function getFocus() {
      this.refs.input.focus();
    }
  }, {
    key: 'resetTags',
    value: function resetTags() {
      this.setState({
        tags: []
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value != '') {
        this.setState({
          showQueryResult: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.value;
      var tags = this.state.tags;
      var queryResults = this.props.queryResults ? this.props.queryResults : [];
      var onChange = this.props.onChange;
      var className = 'selectize-input' + (this.props.className ? ' ' + this.props.className : '') + (this.state.focus === true ? ' focus' : '') + (tags.length === 0 ? ' empty' : '');
      var initialInputWidth = this.props.initialInputWidth ? this.props.initialInputWidth : '100%';
      var inputWidth = tags.length > 0 ? value.length === 0 ? 16 : value.length * 16 : initialInputWidth;
      var placeholder = tags.length > 0 ? '' : this.props.placeholder;

      return _react2.default.createElement(
        'div',
        { onClick: this.getFocus.bind(this), className: className },
        tags.map(function (tag, index) {
          return _react2.default.createElement(
            'span',
            { key: index, className: 'tag' },
            tag.text,
            _react2.default.createElement(_Icon2.default, { size: "small", name: 'close-light', onClick: _this2.removeTag.bind(_this2, index) })
          );
        }),
        _react2.default.createElement('input', { onKeyDown: this.handleKey.bind(this), style: { width: inputWidth }, ref: 'input', onBlur: this.handleBlur.bind(this), onFocus: this.handleFocus.bind(this), onChange: onChange, value: value, placeholder: placeholder }),
        this.state.showQueryResult ? _react2.default.createElement(
          'ul',
          { className: 'query-results' },
          queryResults.map(function (result, index) {
            return _react2.default.createElement(
              'li',
              { onClick: _this2.addTag.bind(_this2, result), key: index },
              result.text
            );
          })
        ) : null
      );
    }
  }]);

  return SelectizeInput;
}(_react.Component);

SelectizeInput.propTypes = {
  // placeholder: React.PropTypes.string.isRequired
};

exports.default = SelectizeInput;
