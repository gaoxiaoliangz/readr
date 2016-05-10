'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var className = this.props.className ? 'btn ' + this.props.className : 'btn';
      var size = this.props.size ? this.props.size : 'medium';
      var isFluid = this.props.isFluid ? this.props.isFluid : false;
      var color = this.props.color ? this.props.color : null;

      if (size === 'small') {
        className += ' btn-small';
      } else if (size === 'large') {
        className += ' btn-large';
      } else if (size === 'medium') {
        className += ' btn-medium';
      } else {
        console.error('Unsupport size!');
      }

      if (color) {
        className += ' btn-' + color;
      }

      if (isFluid) {
        className = +' btn-fluid';
      }

      var to = this.props.to ? this.props.to : null;
      var onClick = this.props.onClick ? this.props.onClick : null;

      if (to) {
        onClick = function onClick() {
          _reactRouter.browserHistory.push(to);
        };
      }

      var props = Object.assign({}, this.props, { className: className }, { onClick: onClick });
      delete props.to;
      delete props.color;
      delete props.size;
      delete props.isFluid;

      return _react2.default.createElement('button', props, this.props.children);
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;
